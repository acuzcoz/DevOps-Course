# 🎯 EJERCICIO 1 DETALLADO: Diferencias Imagen vs Contenedor

**Lección:** 3 - Imágenes vs Contenedores  
**Fecha:** 2025-09-14  
**Duración:** ~15 minutos  
**Estado:** ✅ **COMPLETADO**

---

## **🎯 OBJETIVO**
Demostrar prácticamente las diferencias fundamentales entre imágenes y contenedores: 1 imagen puede crear múltiples contenedores independientes.

---

## **📋 COMANDOS PASO A PASO**

### **PASO 1: Verificar imágenes disponibles** ✅

#### **Comando ejecutado:**
```bash
docker images
│      │
│      └── Subcomando: listar todas las imágenes locales
└── Comando: Docker CLI
```

#### **Resultado obtenido:**
```
REPOSITORY                       TAG       IMAGE ID       CREATED       SIZE
mi-devops-app                    latest    9c0e1912aeaf   4 hours ago   12.8MB
microservicio-organizado         latest    a13784b56410   5 hours ago   146MB
ubuntu                           latest    b60cb74dfa1b   3 weeks ago   101MB
hashicorp/terraform-mcp-server   latest    b64972eb0a0a   4 weeks ago   10.2MB
hello-world                      latest    ca9905c726f0   5 weeks ago   5.2kB
```

#### **Análisis:**
- **5 imágenes disponibles** para el ejercicio
- **ubuntu** seleccionada como imagen base (101MB)
- **Imagen ubuntu:** Sistema operativo completo para demostración

---

### **PASO 2: Crear múltiples contenedores desde UNA imagen** ✅

#### **Contenedor 1:**
```bash
docker run -d --name ubuntu-container-1 ubuntu sleep 3600
│      │   │  │      │                │      │     │
│      │   │  │      │                │      │     └── Comando: dormir 3600 segundos (1 hora)
│      │   │  │      │                │      └── Imagen: ubuntu (misma para todos)
│      │   │  │      │                └── Nombre: contenedor 1
│      │   │  │      └── Flag: asignar nombre específico
│      │   │  └── Flag: ejecutar en background
│      │   └── Flag: detached mode
│      └── Subcomando: ejecutar contenedor
└── Comando: Docker CLI
```
**Container ID:** `82407327270ca7a1eeead657498a73c8e056f86825d51818582fca9bbafa72ac`

#### **Contenedor 2:**
```bash
docker run -d --name ubuntu-container-2 ubuntu sleep 3600
```
**Container ID:** `310234ebad014cf1ab336877195ed1b29db2c48d3208bbe11bbf7da5a2244389`

#### **Contenedor 3:**
```bash
docker run -d --name ubuntu-container-3 ubuntu sleep 3600
```
**Container ID:** `f7f2b50c15e0ccb2916f83d80828f1e683f2b7325ff2399c62efecae3ab9c107`

---

### **PASO 3: Verificar contenedores corriendo** ✅

#### **Comando ejecutado:**
```bash
docker ps
│      │
│      └── Subcomando: ver contenedores corriendo (process status)
└── Comando: Docker CLI
```

#### **Resultado obtenido:**
```
CONTAINER ID   IMAGE           COMMAND                  CREATED          STATUS          PORTS                                     NAMES
f7f2b50c15e0   ubuntu          "sleep 3600"             5 seconds ago    Up 4 seconds                                              ubuntu-container-3
310234ebad01   ubuntu          "sleep 3600"             13 seconds ago   Up 13 seconds                                             ubuntu-container-2
82407327270c   ubuntu          "sleep 3600"             45 seconds ago   Up 44 seconds                                             ubuntu-container-1
bb83ce3c78b3   mi-devops-app   "/docker-entrypoint.…"   4 hours ago      Up 3 hours      0.0.0.0:3000->80/tcp, [::]:3000->80/tcp   mi-app
```

#### **Análisis del resultado:**
- ✅ **3 contenedores ubuntu** corriendo simultáneamente
- ✅ **Misma imagen** (`ubuntu`) para todos
- ✅ **Diferentes Container IDs** (cada uno es único)
- ✅ **Mismo comando** (`sleep 3600`) pero procesos independientes
- ✅ **1 contenedor adicional** (`mi-app`) del ejercicio anterior

#### **Concepto demostrado:**
```
1 IMAGEN ubuntu ──┐
                  ├── ubuntu-container-1 (82407327270c) ✅
                  ├── ubuntu-container-2 (310234ebad01) ✅
                  └── ubuntu-container-3 (f7f2b50c15e0) ✅
```

---

### **PASO 4: Modificar contenedor individualmente** ✅

#### **Entrar al contenedor 1:**
```bash
docker exec -it ubuntu-container-1 bash
│      │    │  │                   │
│      │    │  │                   └── Comando a ejecutar dentro del contenedor
│      │    │  └── Nombre del contenedor específico
│      │    └── Flag: interactive + tty (terminal interactivo)
│      └── Subcomando: ejecutar comando en contenedor corriendo
└── Comando: Docker CLI
```

#### **Prompt obtenido:**
```
root@82407327270c:/#
```
**Análisis:** Estamos dentro del contenedor 1 (ID coincide: 82407327270c)

#### **Crear archivo único:**
```bash
echo "Soy el contenedor 1 - Modificado por acuzcoz" > /tmp/mi-archivo.txt
│    │                                              │ │
│    │                                              │ └── Archivo en directorio temporal
│    │                                              └── Operador: redirección (crear archivo)
│    └── Contenido único identificador del contenedor 1
└── Comando: Linux (ejecutándose dentro del contenedor)
```

#### **Verificar archivo creado:**
```bash
cat /tmp/mi-archivo.txt
│   │
│   └── Archivo a mostrar contenido
└── Comando: mostrar contenido de archivo
```

#### **Resultado:**
```
Soy el contenedor 1 - Modificado por acuzcoz
```
✅ **Archivo creado exitosamente** en contenedor 1

#### **Salir del contenedor:**
```bash
exit
```
**Resultado:** Vuelta al terminal host

---

### **PASO 5: Verificar independencia en contenedor 2** ✅

#### **Entrar al contenedor 2:**
```bash
docker exec -it ubuntu-container-2 bash
```

#### **Prompt obtenido:**
```
root@310234ebad01:/#
```
**Análisis:** Estamos en contenedor 2 (ID diferente: 310234ebad01)

#### **Buscar el archivo (NO debería existir):**
```bash
cat /tmp/mi-archivo.txt
│   │
│   └── Mismo archivo que creamos en contenedor 1
└── Comando: intentar mostrar contenido
```

#### **Error obtenido:**
```
cat: /tmp/mi-archivo.txt: No such file or directory
```

#### **Análisis del error:**
- ✅ **Error esperado:** El archivo NO existe en contenedor 2
- ✅ **Independencia confirmada:** Modificaciones en contenedor 1 no afectan contenedor 2
- ✅ **Concepto demostrado:** Contenedores son instancias independientes

---

### **PASO 6: Limpieza y finalización** ✅

#### **Salir del contenedor 2:**
```bash
exit
```

#### **Detener los 3 contenedores:**
```bash
docker stop ubuntu-container-1 ubuntu-container-2 ubuntu-container-3
│      │    │                   │                   │
│      │    │                   │                   └── Contenedor 3
│      │    │                   └── Contenedor 2
│      │    └── Contenedor 1
│      └── Subcomando: detener múltiples contenedores simultáneamente
└── Comando: Docker CLI
```

#### **Resultado obtenido:**
```
ubuntu-container-1
ubuntu-container-2
ubuntu-container-3
```

#### **Análisis:**
- ✅ **3 contenedores detenidos** exitosamente
- ✅ **Nombres confirmados** en output
- ✅ **Limpieza completa** del ejercicio

---

## **💡 CONCEPTOS TÉCNICOS APRENDIDOS**

### **Diferencia fundamental:**
- **IMAGEN:** Plantilla inmutable, solo lectura, compartible
- **CONTENEDOR:** Instancia ejecutable, modificable, independiente

### **Relación imagen-contenedor:**
```
IMAGEN (ubuntu)
├── Características: Inmutable, 101MB, solo lectura
├── Función: Plantilla para crear contenedores
└── Analogía: Molde para hacer galletas

CONTENEDORES (ubuntu-container-1, 2, 3)
├── Características: Ejecutables, modificables, independientes
├── Función: Instancias corriendo de la imagen
└── Analogía: Galletas hechas con el molde
```

### **Independencia de contenedores:**
- **Modificaciones:** Solo afectan al contenedor específico
- **Archivos:** Cada contenedor tiene su propio filesystem
- **Procesos:** Cada contenedor ejecuta procesos independientes
- **Memoria:** Cada contenedor tiene su espacio de memoria

### **Comandos clave aprendidos:**
- **docker run -d --name:** Crear contenedor con nombre en background
- **docker exec -it:** Ejecutar comandos dentro de contenedor corriendo
- **docker stop multiple:** Detener múltiples contenedores simultáneamente

---

## **🔧 TROUBLESHOOTING APLICADO**

### **Verificación de independencia:**
- **Método:** Crear archivo en contenedor 1, buscar en contenedor 2
- **Resultado esperado:** Archivo no existe en contenedor 2
- **Confirmación:** Error "No such file or directory" ✅

### **Gestión de múltiples contenedores:**
- **Naming:** Nombres descriptivos para fácil identificación
- **Verificación:** `docker ps` para confirmar estado
- **Limpieza:** Detener múltiples contenedores en un comando

---

## **📊 MÉTRICAS DEL EJERCICIO**

### **Recursos utilizados:**
- **Imagen base:** ubuntu (101MB)
- **Contenedores creados:** 3 simultáneos
- **Archivos creados:** 1 (en contenedor 1 únicamente)
- **Comandos ejecutados:** 12 comandos con anatomía completa

### **Tiempo de operaciones:**
- **Creación contenedores:** ~1 minuto (3 contenedores)
- **Modificación:** ~2 minutos (crear archivo, verificar)
- **Verificación independencia:** ~1 minuto
- **Limpieza:** ~30 segundos

### **Conceptos demostrados:**
- ✅ 1 imagen → múltiples contenedores
- ✅ Independencia entre contenedores
- ✅ Modificaciones locales por contenedor
- ✅ Gestión simultánea de múltiples contenedores

---

## **🎯 OBJETIVOS ALCANZADOS**

### **✅ Comprensión teórica:**
- Diferencia clara entre imagen y contenedor
- Concepto de plantilla vs instancia
- Independencia de contenedores

### **✅ Demostración práctica:**
- Creación de múltiples contenedores desde una imagen
- Modificación individual de contenedores
- Verificación de independencia

### **✅ Skills técnicos:**
- Gestión de múltiples contenedores
- Ejecución de comandos dentro de contenedores
- Limpieza eficiente de recursos

---

## **🚀 PREPARACIÓN PARA EJERCICIO 2**

### **Estado actual:**
- **Contenedores:** Todos detenidos y listos para limpieza
- **Imágenes:** 5 disponibles para próximos ejercicios
- **Concepto base:** Imagen vs contenedor completamente comprendido

### **Próximo ejercicio:**
**Ejercicio 2: Gestión de Tags** - Versionado de imágenes

---

## **📋 RESUMEN EJECUTIVO**

**✅ Ejercicio 1 completado exitosamente:**
- **Concepto:** Diferencias imagen vs contenedor demostradas
- **Práctica:** 3 contenedores independientes desde 1 imagen
- **Verificación:** Independencia confirmada con modificaciones
- **Skills:** Gestión múltiple de contenedores dominada
- **Preparado para:** Gestión avanzada de tags y versiones

---

*Ejercicio 1 completado: 2025-09-14 | Concepto fundamental dominado | Independencia de contenedores demostrada*
