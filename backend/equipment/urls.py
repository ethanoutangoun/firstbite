from django.urls import path
from . import views

urlpatterns = [
    path("", views.EquipmentListCreate.as_view(), name="equipment-list-create"),
    path("<int:pk>/", views.EquipmentRetrieve.as_view(), name="equipment-retrieve"),
]
