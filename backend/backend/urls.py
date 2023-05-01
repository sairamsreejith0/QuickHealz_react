"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
# from django.urls import path
# from .import demo

# urlpatterns = [
#     path("admin/", admin.site.urls),
#      path('my_api_view/', demo.my_api_view, name='my_api_view'),
# ]

from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .import views
from .views import PatientRegistrationViewSet
from .views import DoctorRegistrationViewSet
from .views import CaretakerRegistrationViewSet
from .views import MedicationListCreateViewSet
from .views import EducationRegistrationViewSet
from .views import update_schedule
from .views import getCaretakerEmail
from .views import get_medication
from .views import delete_medication

# from .views import logout_view


router = DefaultRouter()
router.register(r'api/patients', PatientRegistrationViewSet, basename='patient')
router.register(r'api/doctors',DoctorRegistrationViewSet, basename='doctor')
router.register(r'api/caretaker',CaretakerRegistrationViewSet,basename='caretaker')
router.register(r'api/medications',MedicationListCreateViewSet,basename="medication")
router.register(r'api/Education',EducationRegistrationViewSet,basename='education')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('login/',views.Login, name='patientlogin'),
    # path('logout/',logout_view, name='Logout')
    path('educationResource/',views.geteducationres,name='educationresource'),
    path('getCaretakerEmail/',getCaretakerEmail, name = 'caretakeremail'),
    # path('send_email/', send_email, name='send-email'),
    path('update_schedule/',update_schedule,name='schedule_mails'),
    path('get_medication/',get_medication,name='getmedication'),
    path('delete_medication/<int:id>/', delete_medication, name='delete_medication'),
    
]