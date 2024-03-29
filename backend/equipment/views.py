from rest_framework import generics
from .models import Equipment, Restaurant
from .serializers import EquipmentSerializer, RestaurantSerializer
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import permissions



class EquipmentRetrieve(generics.RetrieveAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer
    permission_classes = [permissions.AllowAny]  # Allow unauthenticated access to this view

# Define Pagination for Equipment
class EquipmentPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 50


class EquipmentList(generics.ListCreateAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer
    pagination_class = EquipmentPagination

    def get_permissions(self):
        if self.request.method == 'POST':
            # Require authentication for POST requests
            return [permissions.IsAuthenticated()]
        # Allow unauthenticated access for GET requests
        return [permissions.AllowAny()]


class EquipmentRestaurantsView(generics.ListAPIView):
    serializer_class = RestaurantSerializer
    permission_classes = [AllowAny]  # Allow unauthenticated access to this view

    def get_queryset(self):
        equipment_id = self.kwargs.get('pk')
        try:
            equipment = Equipment.objects.get(pk=equipment_id)
            return equipment.equipment.all()
        except Equipment.DoesNotExist:
            return Restaurant.objects.none()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)