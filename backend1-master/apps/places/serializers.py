from .models import Place
from rest_framework import serializers


class PlaceSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Place
        fields = '__all__'
