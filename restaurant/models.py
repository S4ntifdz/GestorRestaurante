from django.db import models
from user.models import User

# Create your models here.
class Restaurant(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    description = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images/')
    tables_quantity = models.IntegerField(default=0)   # Cantidad de mesas
    rooms_quantity = models.IntegerField(default=0)    # Cantidad de salas
    
    
    def createTable(tables_quantity):
        # Quiero que por cada mesa que me cree, genere un carrito de la compra y un qr para pagarlo
        for i in range(tables_quantity):
            table = Table()
            table.name = "Table " + str(i)
            table.qr = "qr" + str(i) + ".png"
            table.save()


    def __str__(self):
        return self.name
    
#--------------------------------------------------------------------------------------------------

class Table(models.Model):
    name = models.CharField(max_length=50)
    qr = models.ImageField(upload_to='images/') #va a ser generado por el carrito
    
    def __str__(self):
        return self.name
