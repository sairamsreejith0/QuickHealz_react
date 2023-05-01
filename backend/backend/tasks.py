from celery import shared_task
from django.conf import settings
from django.core.mail import send_mail
from datetime import timedelta,datetime
from backend.celery import app
import json
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import HttpResponse
from django.core.mail import send_mail
from celery.schedules import crontab
from celery import shared_task

@shared_task
def send_medication_reminder(email):
    for em in email:
        print("sending mail..")
        subject = 'Medication Reminder'
        message = 'This is a reminder to take your medication.'
        from_email = 'sairamsreejith0@gmail.com'
        recipient_list = [em]
        send_mail(subject, message, from_email, recipient_list)
        print("mail sent..")







