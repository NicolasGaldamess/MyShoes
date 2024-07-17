from django.urls import path
from . import views
from django.contrib.auth.views import LoginView
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name= 'register'),
    path('login/', LoginView.as_view(), name= 'login'),
    path('nike/', views.nike, name= 'nike'),
    path('adidas/', views.adidas, name= 'adidas'),
    path('puma/', views.adidas, name= 'puma'),
    path('guardar_usuario/', views.guardar_usuario, name='guardar_usuario'),  # Ruta para guardar un nuevo usuario
    path('nike/nikeVapor', views.nike_vapor, name='nike_vapor'),
    path('nike/nikeAirMax97', views.nike_air_max_97, name='nikeAirMax97'),
    path('carrito/', views.carrito, name='carrito'),
    path('agregar_al_carrito/<int:producto_id>/', views.agregar_al_carrito, name='agregar_al_carrito'),
    path('eliminar_del_carrito/<int:producto_id>/', views.eliminar_del_carrito, name='eliminar_del_carrito'),
    path('actualizar_cantidad/<int:producto_id>/', views.actualizar_cantidad, name='actualizar_cantidad'),
    path('accounts/profile/', views.login_required, name='profile'),
]
