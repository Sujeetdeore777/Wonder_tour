from contextlib import nullcontext
from email.policy import default
from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.
class Category(models.Model):
    class Meta(object):
        db_table = 'category'

    name = models.CharField(
        'Name', max_length=50, null=False, blank=False
    )
    image = CloudinaryField(
        'image', blank=False, null=False, 
    )

    def __str__(self):
        return self.name