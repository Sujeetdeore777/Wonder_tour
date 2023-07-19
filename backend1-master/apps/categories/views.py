from rest_framework import generics, filters
from .serializers import CategorySerializer
from .models import Category
from django_filters.rest_framework import DjangoFilterBackend

class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    

