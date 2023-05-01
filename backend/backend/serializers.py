# serializers.py (in your Django app)

from rest_framework import serializers
from .models import Patient
from .models import Doctor
from .models import Caretaker
from .models import Medication
from django import forms
from .models import Education

class CaretakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Caretaker
        fields = ('first_name', 'last_name', 'date_of_birth', 'gender', 'phone_number', 'email',
                'username', 'password')

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ('first_name', 'last_name', 'date_of_birth', 'gender', 'phone_number', 'email',
                  'address', 'medical_history', 'insurance_information', 'caretaker_email',
                  'username', 'password')

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ('first_name', 'last_name', 'date_of_birth', 'gender', 'phone_number',
                  'email', 'address', 'medical_license_no', 'specialization', 'years_of_experience',
                  'username', 'password')


class MedicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medication
        fields = ('id', 'medication', 'dosage', 'dateIssued', 'instructions','patientId')
        
class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education 
        fields = ('email','text')