from django.contrib import admin
from .models import Patient
from .models import Doctor
from .models import Caretaker
from .models import Medication
from .models import Education

admin.site.register(Patient)
admin.site.register(Doctor)
admin.site.register(Caretaker)
admin.site.register(Medication)
admin.site.register(Education)
