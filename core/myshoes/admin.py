from django.contrib import admin
from .models import Usuario, Producto # Asegúrate de importar tu modelo

# Registra el modelo Usuario
admin.site.register(Usuario)
admin.site.register(Producto)
