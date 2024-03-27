from rest_framework import generics
from .models import Equipment
from .serializers import EquipmentSerializer
from rest_framework.pagination import PageNumberPagination



class EquipmentRetrieve(generics.RetrieveAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer



# Define Pagination for Equipment
class EquipmentPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 50

class EquipmentList(generics.ListCreateAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer
    pagination_class = EquipmentPagination

