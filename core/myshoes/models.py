from django.db import models
from django.contrib.auth.models import User


class Usuario(models.Model):
    rut = models.CharField(max_length=12, unique=True, primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido_paterno = models.CharField(max_length=50)
    apellido_materno = models.CharField(max_length=50)
    edad = models.IntegerField()
    celular = models.CharField(max_length=15)
    email = models.EmailField(max_length=50, unique=True)
    contraseña = models.CharField(max_length=128)

    def __str__(self):
        return f"{self.nombre} {self.apellido_paterno} {self.apellido_materno}"
    

    
class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

class Carrito(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def actualizar_total(self):
        self.total = sum(item.total for item in self.items.all())
        self.save()

class CarritoItem(models.Model):
    carrito = models.ForeignKey(Carrito, related_name='items', on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.IntegerField(default=1)

    @property
    def total(self):
        return self.cantidad * self.producto.precio

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.carrito.actualizar_total()

    def __str__(self):
        return f'{self.cantidad} x {self.producto.nombre}'



