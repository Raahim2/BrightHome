from django.db import models

# Create your models here.
class Product(models.Model):
    id=models.AutoField
    name=models.CharField(max_length=300)
    desc=models.CharField(max_length=1000 , default=" ")
    cateogry=models.CharField(max_length=20,default=" ")
    price=models.IntegerField()
    date=models.DateField()
    image=models.ImageField(upload_to='img',default=" ")

    def __str__(self):
        return self.name
    

class Order(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    address = models.CharField(max_length=1000)
    order = models.CharField(max_length=1000)
    amount = models.IntegerField()


    def __str__(self):
        return self.name