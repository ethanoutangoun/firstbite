from django.urls import path
from . import views

urlpatterns = [
    path("", views.EquipmentList.as_view(), name="equipment-list"),
    path("<int:pk>/", views.EquipmentRetrieve.as_view(), name="equipment-retrieve"),
]
