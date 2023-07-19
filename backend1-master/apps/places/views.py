from rest_framework import generics, filters
from .serializers import PlaceSerializer
from django.http import JsonResponse
from .models import Place
from django_filters.rest_framework import DjangoFilterBackend

class PlaceList(generics.ListAPIView):
    # Get all places, limit = 20
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category']
    search_fields = ['name', 'description']

