from rest_framework import serializers
from .models import Masmorras


class MasmorrasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Masmorras
        fields = "__all__"
