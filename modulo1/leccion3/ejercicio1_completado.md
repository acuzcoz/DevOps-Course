# Ejercicio 1: Diferencias Imagen vs Contenedor

## Demostración completada:
- 1 imagen ubuntu → 3 contenedores independientes
- Modificación en contenedor 1: archivo creado
- Verificación en contenedor 2: archivo NO existe
- Concepto: Contenedores son independientes

## Comandos utilizados:
- docker run -d --name ubuntu-container-X ubuntu sleep 3600
- docker exec -it ubuntu-container-1 bash
- echo 'contenido' > /tmp/mi-archivo.txt
- cat /tmp/mi-archivo.txt (existente en 1, no en 2)
- docker stop ubuntu-container-1 ubuntu-container-2 ubuntu-container-3

## Concepto clave aprendido:
Imagen = Plantilla inmutable
Contenedor = Instancia ejecutable independiente
