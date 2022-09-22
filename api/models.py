from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

# Create your models here.
class Items(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    image = models.CharField(max_length=1000)
    creation_date = models.DateField(auto_now_add=True, auto_now=False, blank=False)
    rating = models.DecimalField(decimal_places=2, max_digits=5)
    price = models.DecimalField(decimal_places=2, max_digits=12)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null = True)
    def __str__(self):
        return self.name