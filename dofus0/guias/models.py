from django.db import models

# Create your models here.


class Masmorras(models.Model):
    nombre = models.CharField(max_length=50)
    nivel = models.IntegerField()
    imagen = models.ImageField()
    link = models.URLField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.nombre
