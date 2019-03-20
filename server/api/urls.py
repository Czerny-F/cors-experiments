from django.urls import path
from .views import cors


app_name = 'api'
urlpatterns = [
    path('cors', cors, name='cors'),
]
