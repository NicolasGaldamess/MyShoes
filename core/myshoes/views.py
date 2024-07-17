from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Producto, Carrito, CarritoItem, Usuario

# Create your views here.





def guardar_usuario(request):
    if request.method == 'POST':
        rut = request.POST.get('rut')
        nombre = request.POST.get('nombre')
        apellido_paterno = request.POST.get('apellido_paterno')
        apellido_materno = request.POST.get('apellido_materno')
        edad = request.POST.get('edad')
        celular = request.POST.get('celular')
        email = request.POST.get('email')
        contraseña = request.POST.get('contraseña')

        # Verificar si ya existe un usuario con el mismo email o rut
        if Usuario.objects.filter(email=email).exists() or Usuario.objects.filter(rut=rut).exists():
            messages.error(request, 'Ya existe un usuario con este email o rut')
            return render(request, 'register.html')

        # Crear el nuevo usuario
        Usuario.objects.create(
            rut=rut,
            nombre=nombre,
            apellido_paterno=apellido_paterno,
            apellido_materno=apellido_materno,
            edad=edad,
            celular=celular,
            email=email,
            contraseña=contraseña
        )

        messages.success(request, 'Registro exitoso. Puedes iniciar sesión.')
        return redirect('login')

    return render(request, 'register.html')

def login(request):
    if request.method == 'POST':
        rut = request.POST.get('rut')
        contraseña = request.POST.get('contraseña')

        try:
            usuario = Usuario.objects.get(rut=rut, contraseña=contraseña)
            request.session['user_rut'] = usuario.rut
            messages.success(request, 'Inicio de sesión exitoso')
            return redirect('index')
        except Usuario.DoesNotExist:
            messages.error(request, 'RUT o contraseña incorrectos.')

    return render(request, 'login.html')

def index(request):
    user_rut = request.session.get('user_rut')
    return render(request, 'index.html', {'user_rut': user_rut})










def register (request):
    return render(request, 'register.html')




@login_required
def carrito(request):
    carrito, created = Carrito.objects.get_or_create(user=request.user)
    return render(request, 'carrito.html', {'carrito': carrito})

@login_required
def agregar_al_carrito(request, producto_id):
    producto = Producto.objects.get(id=producto_id)
    carrito, created = Carrito.objects.get_or_create(user=request.user)
    item, created = CarritoItem.objects.get_or_create(carrito=carrito, producto=producto)
    item.cantidad += 1
    item.save()
    messages.success(request, 'Producto agregado al carrito')
    return redirect('carrito')

@login_required
def eliminar_del_carrito(request, producto_id):
    carrito = Carrito.objects.get(user=request.user)
    item = CarritoItem.objects.get(carrito=carrito, producto_id=producto_id)
    item.delete()
    messages.success(request, 'Producto eliminado del carrito')
    return redirect('carrito')

@login_required
def actualizar_cantidad(request, producto_id):
    if request.method == 'POST':
        carrito = Carrito.objects.get(user=request.user)
        item = CarritoItem.objects.get(carrito=carrito, producto_id=producto_id)
        nueva_cantidad = int(request.POST.get('cantidad'))
        item.cantidad = nueva_cantidad
        item.save()
        messages.success(request, 'Cantidad actualizada')
        return redirect('carrito')
    


def nike (request):
    return render (request, 'nike.html')

def adidas (request):
    return render (request, 'adidas.html')

def puma (request):
    return render (request, 'puma.html')

def nike_vapor(request):
    return render(request, 'nikeVapor.html')
def nike_air_max_97(request):
    return render(request, 'nikeAirMax97.html')



def listar_productos(request):
    productos = Producto.objects.all()
    return render(request, 'nikeVapor.html', {'productos': productos})
