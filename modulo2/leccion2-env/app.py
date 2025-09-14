import os

# Leer variables de entorno
app_name = os.getenv('APP_NAME', 'App Sin Nombre')
version = os.getenv('VERSION', '0.0.0')
debug = os.getenv('DEBUG', 'false').lower() == 'true'
port = int(os.getenv('PORT', '8000'))

print(f"🚀 Iniciando {app_name} v{version}")
print(f"🐛 Debug mode: {debug}")
print(f"🌐 Puerto: {port}")

if debug:
    print("⚠️  MODO DEBUG ACTIVADO - No usar en producción")
else:
    print("✅ Modo producción")