from .models import Category
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Category
        fields = '__all__'