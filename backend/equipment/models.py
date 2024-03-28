from django.db import models

# Create your models here.
class Equipment(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)   
    imageUrl = models.URLField(blank=True, null=True)  # New field for image URL
    serialNumber = models.CharField(max_length=100, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True) 


    def __str__(self):
        return self.name
    

class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField(blank=True, null=True)
    phone = models.CharField(max_length=100, blank=True, null=True)
    equipment = models.ManyToManyField(Equipment, related_name='equipment', blank=True)

    def __str__(self):
        return self.name