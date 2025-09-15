# 🚀 REFERENCIA RÁPIDA - ANATOMÍA DE COMANDOS
## Docker + Linux + GitHub + AWS CLI + AWS EC2

---

## **🐳 DOCKER - ANATOMÍA COMPLETA**

### **Comandos Básicos**
```bash
docker --version
│      │
│      └── Flag: mostrar versión
└── Comando: Docker CLI

docker run -d -p 8080:80 --name mi-app nginx
│      │   │  │  │        │      │     │
│      │   │  │  │        │      │     └── Imagen base
│      │   │  │  │        │      └── Nombre del contenedor
│      │   │  │  │        └── Flag: asignar nombre
│      │   │  │  └── Mapeo: puerto_host:puerto_contenedor
│      │   │  └── Flag: mapear puertos
│      │   └── Flag: ejecutar en background (detached)
│      └── Subcomando: ejecutar contenedor
└── Comando principal: Docker CLI

docker ps -a
│      │  │
│      │  └── Flag: mostrar todos (incluso detenidos)
│      └── Subcomando: listar contenedores (process status)
└── Comando: Docker CLI

docker build -t mi-imagen:v1.0 .
│      │     │  │         │     │
│      │     │  │         │     └── Contexto de build (directorio actual)
│      │     │  │         └── Tag/versión de la imagen
│      │     │  └── Nombre de la imagen
│      │     └── Flag: asignar tag
│      └── Subcomando: construir imagen
└── Comando: Docker CLI
```

### **Dockerfile - Anatomía**
```dockerfile
FROM nginx:alpine
│    │     │
│    │     └── Tag: versión específica
│    └── Imagen base
└── Instrucción: definir imagen padre

COPY index.html /usr/share/nginx/html/
│    │          │
│    │          └── Destino dentro del contenedor
│    └── Archivo fuente (contexto local)
└── Instrucción: copiar archivos

RUN apk add --no-cache curl git
│   │   │   │         │    │
│   │   │   │         │    └── Paquete: herramienta Git
│   │   │   │         └── Paquete: herramienta HTTP
│   │   │   └── Flag: no guardar cache (Alpine específico)
│   │   └── Subcomando: agregar paquetes
│   └── Comando: gestor de paquetes Alpine
└── Instrucción Dockerfile: ejecutar durante build

ENV APP_NAME=MiApp VERSION=1.0.0
│   │        │     │       │
│   │        │     │       └── Valor de variable
│   │        │     └── Variable 2
│   │        └── Valor de variable 1
│   └── Variable 1
└── Instrucción: definir variables de entorno

WORKDIR /app
│       │
│       └── Ruta absoluta del directorio de trabajo
└── Instrucción: establecer directorio de trabajo
```

---

## **🐧 LINUX - ANATOMÍA COMPLETA**

### **Navegación y Archivos**
```bash
ls -la /var/www
│  │   │
│  │   └── Directorio a listar
│  └── Flags: long format + all files
└── Comando: listar archivos

cd /home/user/projects
│  │
│  └── Directorio destino (ruta absoluta)
└── Comando: cambiar directorio

mkdir -p proyecto/src/components
│     │  │
│     │  └── Estructura de directorios a crear
│     └── Flag: crear directorios padre si no existen
└── Comando: crear directorio

cp -r origen/ destino/
│  │  │       │
│  │  │       └── Directorio destino
│  │  └── Directorio origen
│  └── Flag: recursivo (para directorios)
└── Comando: copiar archivos/directorios
```

### **Permisos y Usuarios**
```bash
chmod 755 script.sh
│     │   │
│     │   └── Archivo a modificar
│     └── Permisos: rwxr-xr-x (owner: rwx, group: r-x, others: r-x)
└── Comando: cambiar permisos

chown user:group archivo.txt
│     │    │     │
│     │    │     └── Archivo a modificar
│     │    └── Grupo propietario
│     └── Usuario propietario
└── Comando: cambiar propietario

sudo systemctl start docker
│    │         │     │
│    │         │     └── Servicio a iniciar
│    │         └── Subcomando: iniciar servicio
│    └── Comando: control de servicios
└── Comando: ejecutar como superusuario
```

### **Procesos y Servicios**
```bash
ps aux | grep docker
│  │   │ │    │
│  │   │ │    └── Patrón a buscar
│  │   │ └── Comando: buscar texto
│  │   └── Pipe: pasar output al siguiente comando
│  └── Flags: all users, user format, extended
└── Comando: listar procesos

systemctl status docker
│         │      │
│         │      └── Servicio a consultar
│         └── Subcomando: ver estado
└── Comando: control de servicios systemd

netstat -tulpn
│       │
│       └── Flags: tcp, udp, listening, processes, numeric
└── Comando: estadísticas de red
```

---

## **🐙 GITHUB/GIT - ANATOMÍA COMPLETA**

### **📋 METODOLOGÍA DEL CURSO**
- **Lecciones 1-2:** Documentadas vía VS Code (ya en GitHub)
- **Lección 3+:** Uso exclusivo de comandos Git por terminal
- **Objetivo:** Dominar workflow profesional con anatomía completa

### **Git Básico**
```bash
git init
│   │
│   └── Subcomando: inicializar repositorio
└── Comando: Git

git add .
│   │   │
│   │   └── Argumento: todos los archivos (directorio actual)
│   └── Subcomando: agregar archivos al staging area
└── Comando: Git

git commit -m "feat: nueva funcionalidad"
│   │      │  │
│   │      │  └── Mensaje del commit
│   │      └── Flag: especificar mensaje
│   └── Subcomando: confirmar cambios
└── Comando: Git

git push -u origin main
│   │    │  │      │
│   │    │  │      └── Branch a subir
│   │    │  └── Repositorio remoto
│   │    └── Flag: set upstream (primera vez)
│   └── Subcomando: subir cambios
└── Comando: Git
```

### **GitHub CLI**
```bash
gh repo create mi-proyecto --public --description "Mi descripción"
│  │    │      │           │        │             │
│  │    │      │           │        │             └── Descripción del repositorio
│  │    │      │           │        └── Flag: especificar descripción
│  │    │      │           └── Flag: repositorio público
│  │    │      └── Nombre del repositorio
│  │    └── Subcomando: crear repositorio
│  └── Recurso: repositorio
└── Comando: GitHub CLI

gh auth login
│  │    │
│  │    └── Subcomando: iniciar sesión
│  └── Recurso: autenticación
└── Comando: GitHub CLI

gh repo view
│  │    │
│  │    └── Subcomando: ver repositorio actual
│  └── Recurso: repositorio
└── Comando: GitHub CLI
```

---

## **☁️ AWS CLI - ANATOMÍA COMPLETA**

### **Configuración**
```bash
aws configure
│   │
│   └── Subcomando: configurar credenciales y región
└── Comando: AWS CLI

aws configure list
│   │         │
│   │         └── Subcomando: listar configuración actual
│   └── Subcomando: gestionar configuración
└── Comando: AWS CLI

aws sts get-caller-identity
│   │   │
│   │   └── Subcomando: obtener identidad del usuario actual
│   └── Servicio: Security Token Service
└── Comando: AWS CLI
```

### **EC2 - Instancias**
```bash
aws ec2 describe-instances
│   │   │
│   │   └── Subcomando: listar todas las instancias
│   └── Servicio: Elastic Compute Cloud
└── Comando: AWS CLI

aws ec2 run-instances --image-id ami-12345 --instance-type t2.micro --key-name my-key
│   │   │             │          │         │               │        │         │
│   │   │             │          │         │               │        │         └── Nombre del key pair
│   │   │             │          │         │               │        └── Flag: especificar key pair
│   │   │             │          │         │               └── Tipo de instancia
│   │   │             │          │         └── Flag: especificar tipo
│   │   │             │          └── ID de la imagen AMI
│   │   │             └── Flag: especificar imagen
│   │   └── Subcomando: crear instancia
│   └── Servicio: EC2
└── Comando: AWS CLI

aws ec2 terminate-instances --instance-ids i-1234567890abcdef0
│   │   │                   │              │
│   │   │                   │              └── ID de la instancia a terminar
│   │   │                   └── Flag: especificar IDs de instancias
│   │   └── Subcomando: terminar instancias
│   └── Servicio: EC2
└── Comando: AWS CLI
```

### **EC2 - Security Groups**
```bash
aws ec2 create-security-group --group-name my-sg --description "Mi security group"
│   │   │                     │            │      │             │
│   │   │                     │            │      │             └── Descripción del grupo
│   │   │                     │            │      └── Flag: especificar descripción
│   │   │                     │            └── Nombre del security group
│   │   │                     └── Flag: especificar nombre
│   │   └── Subcomando: crear security group
│   └── Servicio: EC2
└── Comando: AWS CLI

aws ec2 authorize-security-group-ingress --group-id sg-12345 --protocol tcp --port 80 --cidr 0.0.0.0/0
│   │   │                             │          │         │          │   │        │    │
│   │   │                             │          │         │          │   │        │    └── Rango IP permitido (todo internet)
│   │   │                             │          │         │          │   │        └── Flag: especificar CIDR
│   │   │                             │          │         │          │   └── Puerto permitido
│   │   │                             │          │         │          └── Flag: especificar puerto
│   │   │                             │          │         └── Protocolo de red
│   │   │                             │          └── ID del security group
│   │   │                             └── Flag: especificar grupo
│   │   └── Subcomando: autorizar tráfico entrante
│   └── Servicio: EC2
└── Comando: AWS CLI
```

### **S3 - Storage**
```bash
aws s3 ls
│   │  │
│   │  └── Subcomando: listar buckets
│   └── Servicio: Simple Storage Service
└── Comando: AWS CLI

aws s3 cp archivo.txt s3://mi-bucket/
│   │  │  │           │
│   │  │  │           └── Destino en S3
│   │  │  └── Archivo local a copiar
│   │  └── Subcomando: copiar archivo
│   └── Servicio: S3
└── Comando: AWS CLI

aws s3 sync ./directorio s3://mi-bucket/directorio/
│   │  │    │            │
│   │  │    │            └── Destino en S3
│   │  │    └── Directorio local a sincronizar
│   │  └── Subcomando: sincronizar directorios
│   └── Servicio: S3
└── Comando: AWS CLI
```

### **CloudWatch - Monitoring**
```bash
aws cloudwatch describe-alarms
│   │          │
│   │          └── Subcomando: listar alarmas
│   └── Servicio: CloudWatch
└── Comando: AWS CLI

aws cloudwatch put-metric-data --namespace "MyApp" --metric-data MetricName=CPUUsage,Value=75.0
│   │          │               │           │       │             │          │         │
│   │          │               │           │       │             │          │         └── Valor de la métrica
│   │          │               │           │       │             │          └── Nombre de la métrica
│   │          │               │           │       │             └── Datos de la métrica
│   │          │               │           │       └── Flag: especificar datos
│   │          │               │           └── Namespace de la aplicación
│   │          │               └── Flag: especificar namespace
│   │          └── Subcomando: enviar métrica personalizada
│   └── Servicio: CloudWatch
└── Comando: AWS CLI
```

---

## **🔗 PATRONES DE INTEGRACIÓN**

### **Docker + AWS CLI**
```bash
# Build y push a ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-east-1.amazonaws.com
docker build -t mi-app .
docker tag mi-app:latest 123456789012.dkr.ecr.us-east-1.amazonaws.com/mi-app:latest
docker push 123456789012.dkr.ecr.us-east-1.amazonaws.com/mi-app:latest
```

### **GitHub + AWS CLI (CI/CD)**
```yaml
# .github/workflows/deploy.yml
- name: Configure AWS credentials
  uses: aws-actions/configure-aws-credentials@v2
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: us-east-1

- name: Deploy to EC2
  run: |
    aws ec2 describe-instances --filters "Name=tag:Name,Values=MyApp" --query 'Reservations[*].Instances[*].PublicIpAddress' --output text
```

### **Linux + Docker + AWS CLI**
```bash
#!/bin/bash
# Script de deployment completo
echo "🚀 Iniciando deployment..."

# Build de imagen Docker
docker build -t mi-app:$(date +%Y%m%d-%H%M%S) .

# Subir a ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ECR_REGISTRY
docker push $ECR_REGISTRY/mi-app:latest

# Deploy a EC2
aws ec2 run-instances \
  --image-id ami-12345 \
  --instance-type t2.micro \
  --key-name my-key \
  --security-group-ids sg-12345 \
  --user-data file://user-data.sh

echo "✅ Deployment completado"
```

---

## **💡 TIPS DE ANATOMÍA**

### **🔍 Cómo Leer Cualquier Comando**
1. **Comando principal** (docker, git, aws, etc.)
2. **Servicio/Recurso** (ec2, s3, repo, etc.)
3. **Subcomando/Acción** (run, create, describe, etc.)
4. **Flags obligatorios** (--image-id, --name, etc.)
5. **Flags opcionales** (--region, --description, etc.)
6. **Argumentos** (valores específicos)

### **🎯 Patrones Comunes**
- **Listar**: `describe`, `list`, `ls`, `ps`
- **Crear**: `create`, `run`, `init`, `build`
- **Modificar**: `update`, `modify`, `edit`
- **Eliminar**: `delete`, `remove`, `terminate`, `rm`
- **Información**: `describe`, `show`, `status`, `info`

---

**🚀 Usa esta referencia para entender cualquier comando del curso**  
**Cada símbolo tiene un propósito - ¡Nunca más comandos misteriosos!**
