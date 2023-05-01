# views.py (in your Django app)

from rest_framework import viewsets
from django.contrib.auth import logout
from django.shortcuts import redirect
from .models import Patient
from .models import Doctor
from .models import Education
from .models import Caretaker
from django.http import JsonResponse
from .serializers import PatientSerializer
from .serializers import DoctorSerializer
from .serializers import CaretakerSerializer
from django.shortcuts import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from .models import Medication
from .serializers import MedicationSerializer
from django_q.tasks import async_task
from .serializers import EducationSerializer
from django.shortcuts import get_object_or_404
# backend/views.py

from django_q.tasks import async_task



class PatientRegistrationViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    
class DoctorRegistrationViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    
class CaretakerRegistrationViewSet(viewsets.ModelViewSet):
    queryset = Caretaker.objects.all()
    serializer_class = CaretakerSerializer

class EducationRegistrationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class MedicationListCreateViewSet(viewsets.ModelViewSet):
    queryset = Medication.objects.all()
    serializer_class = MedicationSerializer


@csrf_exempt
def Login(request):

    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        userType = data.get('userType')
      
        try:
            # Query Patient model to check for match in database
            if userType =='patient':
                patient = Patient.objects.get(email=email, password=password)
            elif userType == 'doctor':
                doctor = Doctor.objects.get(email=email,password=password)
            else:
                caretaker = Caretaker.objects.get(email=email,password=password)        
            # Perform actions on successful login, e.g., return success response
            return HttpResponse('Success')
        except Patient.DoesNotExist:
            # Perform actions on failed login, e.g., return error response
            return HttpResponse('Invalid username or password')
    else:
        # Perform actions for other HTTP methods, e.g., return error response
        return HttpResponse('Method not allowed')

@csrf_exempt
def geteducationres(request):
    educationRec = Education.objects.all()
    print(educationRec)
    data = {"education":[]}
    for value in educationRec:
        data["education"].append({
            "email": value.email,
            "text": value.text,
        })
        
    return JsonResponse(data)

from celery.schedules import crontab
from datetime import datetime, timedelta
from django.http import HttpResponse
from backend.tasks import send_medication_reminder
from .celery import app
from django.conf import settings

@csrf_exempt
def update_schedule(request):
    data = json.loads(request.body)
    print(data)
    email = data.get('email')
    start_date = datetime.strptime(data.get('startDate'), '%Y-%m-%d').date()
    end_date = datetime.strptime(data.get('endDate'), '%Y-%m-%d').date()
    time = datetime.strptime(data.get('time'), '%H:%M').time()
    
    # Create a list of datetimes for the medication reminders
    reminder_datetimes = []
    current_date = start_date
    while current_date <= end_date:
        reminder_datetime = datetime.combine(current_date, time)
        reminder_datetimes.append(reminder_datetime)
        current_date += timedelta(days=1)
  
    # Schedule the Celery task to send the medication reminder at the specified time every day until the end date
    for i, reminder_datetime in enumerate(reminder_datetimes):
        send_medication_reminder.apply_async(args=[email], eta=reminder_datetime, task_id=f'medication_reminder_{i}')

    return HttpResponse('Medication reminders scheduled successfully.')

@csrf_exempt
def getCaretakerEmail(request):
    data = json.loads(request.body)
    email = data.get('email')
    patient = Patient.objects.get(email=email)
    caretaker_email = patient.caretaker_email
    print(caretaker_email)
    return HttpResponse(caretaker_email)

@csrf_exempt
def get_medication(request):
    if request.method == 'GET':
        medication_list = Medication.objects.all().values()
        return JsonResponse({'medication_list': list(medication_list)})
    
@csrf_exempt    
def delete_medication(request, id):
    medication = get_object_or_404(Medication, id=id)
    medication.delete()
    return JsonResponse({"success": True})