from rest_framework import viewsets
from .serializer import MasmorrasSerializer
from .models import Masmorras


class MasmorrasView(viewsets.ModelViewSet):
    serializer_class = MasmorrasSerializer
    queryset = Masmorras.objects.all()
