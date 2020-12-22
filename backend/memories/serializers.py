from rest_framework import serializers

from .models import Memory


class MemorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Memory
        fields = "__all__"


class CreateMemorySerializer(serializers.ModelSerializer ):

    title = serializers.CharField()
    date = serializers.DateField()

    class Meta:
        model = Memory
        fields = ("id", "title", "date")