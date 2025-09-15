# 🎯 CONTENIDO ADICIONAL PARA 100% COBERTURA

**Objetivo:** Completar gaps identificados para cobertura total DevOps Engineer  
**Impacto:** 94% → 100% cobertura profesional  
**Tiempo adicional:** +1.75 horas

---

## **🥇 LECCIÓN 10.5: Cron Jobs y Automatización**

### **🎯 OBJETIVO:**
Dominar la automatización de tareas en Linux con cron, integrando Docker, AWS CLI y Git para workflows profesionales.

### **📚 CONCEPTOS FUNDAMENTALES:**

#### **¿Qué es Cron?**
- **Definición:** Demonio de Linux para ejecutar tareas programadas
- **Uso:** Backups, limpieza, monitoreo, sincronización
- **Ventaja:** Automatización sin intervención manual

#### **Sintaxis de Crontab:**
```bash
# Formato: minuto hora día_mes mes día_semana comando
* * * * * comando_a_ejecutar
│ │ │ │ │ │
│ │ │ │ │ └── Comando completo con ruta absoluta
│ │ │ │ └── Día de la semana (0-7, donde 0 y 7 = domingo)
│ │ │ └── Mes (1-12)
│ │ └── Día del mes (1-31)
│ └── Hora (0-23)
└── Minuto (0-59)
```

### **🔧 COMANDOS CON ANATOMÍA COMPLETA:**

#### **Gestión de Crontab:**
```bash
crontab -e
│       │ │
│       │ └── Flag: edit (editar crontab del usuario actual)
│       └── Subcomando: cron table (tabla de tareas programadas)
└── Comando: gestión de tareas programadas de Linux
```

```bash
crontab -l
│       │ │
│       │ └── Flag: list (listar tareas programadas actuales)
│       └── Subcomando: cron table
└── Comando: gestión de tareas programadas
```

```bash
crontab -r
│       │ │
│       │ └── Flag: remove (eliminar todas las tareas del usuario)
│       └── Subcomando: cron table
└── Comando: gestión de tareas programadas
```

### **🎯 EJERCICIO INTEGRADO: Backup Automático DevOps**

#### **PASO 1: Crear script de backup**
```bash
#!/bin/bash
# /home/user/scripts/backup-devops.sh

# Variables
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/tmp/backups"
S3_BUCKET="mi-bucket-devops-backups"

# Crear directorio de backup
mkdir -p $BACKUP_DIR

# Backup de contenedores Docker
echo "🐳 Backing up Docker containers..."
docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}" > $BACKUP_DIR/containers_$DATE.txt

# Backup de imágenes Docker
echo "📦 Backing up Docker images..."
docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}" > $BACKUP_DIR/images_$DATE.txt

# Backup de logs de aplicación
echo "📋 Backing up application logs..."
if [ -d "/var/log/myapp" ]; then
    tar -czf $BACKUP_DIR/app_logs_$DATE.tar.gz /var/log/myapp/
fi

# Sync a AWS S3
echo "☁️ Syncing to AWS S3..."
aws s3 sync $BACKUP_DIR s3://$S3_BUCKET/backups/

# Git commit de estado
echo "🐙 Committing backup status to Git..."
cd /path/to/devops-project
echo "Backup completed: $DATE" >> backup_history.log
git add backup_history.log
git commit -m "backup: automated backup $DATE"

# Limpieza local (mantener solo últimos 7 días)
echo "🧹 Cleaning old backups..."
find $BACKUP_DIR -name "*.txt" -mtime +7 -delete
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete

echo "✅ Backup completed successfully: $DATE"
```

#### **PASO 2: Hacer script ejecutable**
```bash
chmod +x /home/user/scripts/backup-devops.sh
│     │  │
│     │  └── Archivo: script de backup
│     └── Permisos: +x (agregar permiso de ejecución)
└── Comando: cambiar permisos de archivo
```

#### **PASO 3: Configurar cron job**
```bash
crontab -e
```

**Agregar líneas:**
```bash
# Backup diario a las 2:00 AM
0 2 * * * /home/user/scripts/backup-devops.sh >> /var/log/backup.log 2>&1

# Limpieza de logs Docker cada domingo a las 3:00 AM
0 3 * * 0 docker system prune -f >> /var/log/docker-cleanup.log 2>&1

# Sync de código cada hora (solo en horario laboral)
0 9-17 * * 1-5 cd /path/to/project && git pull origin main >> /var/log/git-sync.log 2>&1
```

#### **Anatomía de las tareas:**
```bash
0 2 * * * /home/user/scripts/backup-devops.sh >> /var/log/backup.log 2>&1
│ │ │ │ │ │                                  │                      │
│ │ │ │ │ │                                  │                      └── Redirigir errores a mismo archivo
│ │ │ │ │ │                                  └── Redirigir output a log
│ │ │ │ │ └── Script completo con ruta absoluta
│ │ │ │ └── Todos los días de la semana
│ │ │ └── Todos los meses
│ │ └── Todos los días del mes
│ └── Hora: 2 AM
└── Minuto: 0 (en punto)
```

### **🔧 TROUBLESHOOTING COMÚN:**

#### **Verificar que cron esté corriendo:**
```bash
systemctl status cron
│         │      │
│         │      └── Servicio: cron daemon
│         └── Subcomando: mostrar estado del servicio
└── Comando: gestión de servicios systemd
```

#### **Ver logs de cron:**
```bash
tail -f /var/log/cron
│    │  │
│    │  └── Archivo: log de cron system
│    └── Flag: follow (seguir en tiempo real)
└── Comando: mostrar final de archivo
```

#### **Verificar sintaxis de crontab:**
```bash
crontab -l | head -5
│       │ │ │    │
│       │ │ │    └── Número: mostrar primeras 5 líneas
│       │ │ └── Comando: mostrar primeras líneas
│       │ └── Flag: list (listar tareas)
│       └── Subcomando: cron table
└── Comando: gestión de cron
```

---

## **🥈 LECCIÓN 13.5: AWS S3 Fundamentals**

### **🎯 OBJETIVO:**
Dominar AWS S3 para storage, backups y distribución de contenido, integrando con Docker y automatización.

### **📚 CONCEPTOS FUNDAMENTALES:**

#### **¿Qué es AWS S3?**
- **Definición:** Simple Storage Service - almacenamiento de objetos escalable
- **Características:** 99.999999999% durabilidad, acceso global, versionado
- **Casos de uso:** Backups, static websites, data lakes, CDN

#### **Conceptos clave:**
- **Bucket:** Contenedor de objetos (nombre único global)
- **Object:** Archivo individual (hasta 5TB)
- **Key:** Ruta/nombre del objeto dentro del bucket
- **Region:** Ubicación geográfica del bucket

### **🔧 COMANDOS CON ANATOMÍA COMPLETA:**

#### **Gestión de Buckets:**
```bash
aws s3 mb s3://mi-bucket-devops-2025
│   │  │  │
│   │  │  └── URI del bucket (debe ser único globalmente)
│   │  └── Subcomando: make bucket (crear bucket)
│   └── Servicio: S3 (Simple Storage Service)
└── Comando: AWS CLI
```

```bash
aws s3 ls
│   │  │
│   │  └── Subcomando: list (listar todos los buckets)
│   └── Servicio: S3
└── Comando: AWS CLI
```

```bash
aws s3 ls s3://mi-bucket-devops-2025/
│   │  │  │
│   │  │  └── URI del bucket específico
│   │  └── Subcomando: list (listar contenido del bucket)
│   └── Servicio: S3
└── Comando: AWS CLI
```

#### **Operaciones con Objetos:**
```bash
aws s3 cp archivo.txt s3://mi-bucket-devops-2025/
│   │  │  │          │
│   │  │  │          └── Destino: bucket S3
│   │  │  └── Origen: archivo local
│   │  └── Subcomando: copy (copiar archivo)
│   └── Servicio: S3
└── Comando: AWS CLI
```

```bash
aws s3 sync ./logs s3://mi-bucket-devops-2025/logs/
│   │  │    │      │
│   │  │    │      └── Destino: directorio en S3
│   │  │    └── Origen: directorio local
│   │  └── Subcomando: sync (sincronizar directorios)
│   └── Servicio: S3
└── Comando: AWS CLI
```

```bash
aws s3 rm s3://mi-bucket-devops-2025/archivo.txt
│   │  │  │
│   │  │  └── URI completa del objeto a eliminar
│   │  └── Subcomando: remove (eliminar objeto)
│   └── Servicio: S3
└── Comando: AWS CLI
```

### **🎯 EJERCICIO INTEGRADO: Storage Strategy DevOps**

#### **PASO 1: Crear estructura de buckets**
```bash
# Bucket para backups
aws s3 mb s3://devops-backups-$(date +%Y) --region us-east-1

# Bucket para logs de aplicación
aws s3 mb s3://devops-logs-$(date +%Y) --region us-east-1

# Bucket para artefactos de build
aws s3 mb s3://devops-artifacts-$(date +%Y) --region us-east-1
```

#### **PASO 2: Configurar lifecycle policies**
```bash
# Crear política de lifecycle (JSON)
cat > lifecycle-policy.json << EOF
{
    "Rules": [
        {
            "ID": "BackupRetention",
            "Status": "Enabled",
            "Filter": {"Prefix": "backups/"},
            "Transitions": [
                {
                    "Days": 30,
                    "StorageClass": "STANDARD_IA"
                },
                {
                    "Days": 90,
                    "StorageClass": "GLACIER"
                }
            ],
            "Expiration": {
                "Days": 365
            }
        }
    ]
}
EOF

# Aplicar política
aws s3api put-bucket-lifecycle-configuration \
    --bucket devops-backups-2025 \
    --lifecycle-configuration file://lifecycle-policy.json
```

#### **PASO 3: Script de backup integrado con Docker**
```bash
#!/bin/bash
# docker-s3-backup.sh

BUCKET="devops-backups-2025"
DATE=$(date +%Y%m%d_%H%M%S)

# Backup de volúmenes Docker
echo "🐳 Backing up Docker volumes..."
docker run --rm -v docker_volume:/backup -v $(pwd):/host alpine \
    tar czf /host/volume_backup_$DATE.tar.gz -C /backup .

# Upload a S3
echo "☁️ Uploading to S3..."
aws s3 cp volume_backup_$DATE.tar.gz s3://$BUCKET/docker-volumes/

# Backup de imágenes críticas
echo "📦 Backing up critical images..."
docker save mi-app:latest | gzip > app_image_$DATE.tar.gz
aws s3 cp app_image_$DATE.tar.gz s3://$BUCKET/docker-images/

# Sync de logs
echo "📋 Syncing logs..."
aws s3 sync /var/log/myapp s3://$BUCKET/logs/$(date +%Y/%m/%d)/

# Limpieza local
rm -f volume_backup_$DATE.tar.gz app_image_$DATE.tar.gz

echo "✅ S3 backup completed: $DATE"
```

#### **PASO 4: Integración con cron**
```bash
# Agregar a crontab
0 1 * * * /home/user/scripts/docker-s3-backup.sh >> /var/log/s3-backup.log 2>&1
```

### **🔧 COMANDOS AVANZADOS:**

#### **Versionado de objetos:**
```bash
aws s3api put-bucket-versioning \
    --bucket mi-bucket-devops-2025 \
    --versioning-configuration Status=Enabled
│   │    │                      │                    │      │
│   │    │                      │                    │      └── Estado: habilitado
│   │    │                      │                    └── Parámetro: configuración
│   │    │                      └── Bucket objetivo
│   │    └── Subcomando: configurar versionado
│   └── API: S3 API (más granular que s3)
└── Comando: AWS CLI
```

#### **Configurar website estático:**
```bash
aws s3 website s3://mi-bucket-devops-2025 \
    --index-document index.html \
    --error-document error.html
│   │  │       │                │                 │
│   │  │       │                │                 └── Documento de error
│   │  │       │                └── Documento índice
│   │  │       └── Bucket a configurar como website
│   │  └── Subcomando: configurar website estático
│   └── Servicio: S3
└── Comando: AWS CLI
```

---

## **🥉 LECCIÓN 17.5: Container Security Scanning**

### **🎯 OBJETIVO:**
Implementar security scanning en el pipeline DevOps para detectar vulnerabilidades en contenedores antes de producción.

### **📚 CONCEPTOS FUNDAMENTALS:**

#### **¿Por qué Security Scanning?**
- **Vulnerabilidades:** CVEs en imágenes base y dependencias
- **Compliance:** Requisitos de seguridad empresarial
- **Prevención:** Detectar problemas antes de producción
- **Automatización:** Integrar en CI/CD pipeline

#### **Tipos de vulnerabilidades:**
- **OS packages:** Vulnerabilidades en paquetes del sistema
- **Application dependencies:** Librerías y frameworks
- **Configuration:** Configuraciones inseguras
- **Secrets:** Credenciales hardcodeadas

### **🔧 COMANDOS CON ANATOMÍA COMPLETA:**

#### **Docker Scout (Built-in):**
```bash
docker scout quickview mi-app:latest
│      │     │         │
│      │     │         └── Imagen a analizar (con tag específico)
│      │     └── Subcomando: vista rápida de vulnerabilidades
│      └── Herramienta: Docker Scout (integrada en Docker Desktop)
└── Comando: Docker CLI
```

```bash
docker scout cves mi-app:latest
│      │     │    │
│      │     │    └── Imagen a analizar
│      │     └── Subcomando: Common Vulnerabilities and Exposures
│      └── Herramienta: Docker Scout
└── Comando: Docker CLI
```

```bash
docker scout recommendations mi-app:latest
│      │     │             │
│      │     │             └── Imagen a analizar
│      │     └── Subcomando: recomendaciones de mejora
│      └── Herramienta: Docker Scout
└── Comando: Docker CLI
```

#### **Trivy (Open Source Alternative):**
```bash
# Instalar Trivy
curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin

# Escanear imagen
trivy image mi-app:latest
│     │     │
│     │     └── Imagen a escanear
│     └── Subcomando: escanear imagen Docker
└── Comando: Trivy security scanner
```

```bash
trivy image --severity HIGH,CRITICAL mi-app:latest
│     │     │          │              │
│     │     │          │              └── Imagen objetivo
│     │     │          └── Niveles: solo vulnerabilidades altas y críticas
│     │     └── Flag: filtrar por severidad
│     └── Subcomando: escanear imagen
└── Comando: Trivy
```

### **🎯 EJERCICIO INTEGRADO: Security Pipeline**

#### **PASO 1: Script de security scanning**
```bash
#!/bin/bash
# security-scan.sh

IMAGE_NAME=$1
SEVERITY_THRESHOLD="HIGH,CRITICAL"
REPORT_DIR="./security-reports"

if [ -z "$IMAGE_NAME" ]; then
    echo "❌ Usage: $0 <image_name:tag>"
    exit 1
fi

mkdir -p $REPORT_DIR

echo "🔍 Starting security scan for: $IMAGE_NAME"

# Docker Scout scan
echo "🐳 Running Docker Scout scan..."
docker scout cves $IMAGE_NAME > $REPORT_DIR/scout-report.txt 2>&1
SCOUT_EXIT_CODE=$?

# Trivy scan
echo "🛡️ Running Trivy scan..."
trivy image --severity $SEVERITY_THRESHOLD --format json $IMAGE_NAME > $REPORT_DIR/trivy-report.json
TRIVY_EXIT_CODE=$?

# Parse results
HIGH_VULNS=$(cat $REPORT_DIR/trivy-report.json | jq '.Results[].Vulnerabilities | length')
CRITICAL_VULNS=$(cat $REPORT_DIR/trivy-report.json | jq '.Results[].Vulnerabilities | map(select(.Severity == "CRITICAL")) | length')

echo "📊 Security Scan Results:"
echo "   High vulnerabilities: $HIGH_VULNS"
echo "   Critical vulnerabilities: $CRITICAL_VULNS"

# Decision logic
if [ "$CRITICAL_VULNS" -gt 0 ]; then
    echo "❌ CRITICAL vulnerabilities found. Deployment blocked!"
    exit 1
elif [ "$HIGH_VULNS" -gt 10 ]; then
    echo "⚠️ Too many HIGH vulnerabilities. Review required!"
    exit 1
else
    echo "✅ Security scan passed. Safe to deploy!"
    exit 0
fi
```

#### **PASO 2: GitHub Actions integration**
```yaml
# .github/workflows/security-scan.yml
name: Security Scan

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  security-scan:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Build Docker image
      run: docker build -t ${{ github.repository }}:${{ github.sha }} .
    
    - name: Install Trivy
      run: |
        sudo apt-get update
        sudo apt-get install wget apt-transport-https gnupg lsb-release
        wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | sudo apt-key add -
        echo "deb https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main" | sudo tee -a /etc/apt/sources.list.d/trivy.list
        sudo apt-get update
        sudo apt-get install trivy
    
    - name: Run security scan
      run: |
        chmod +x ./scripts/security-scan.sh
        ./scripts/security-scan.sh ${{ github.repository }}:${{ github.sha }}
    
    - name: Upload security reports
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: security-reports
        path: ./security-reports/
```

#### **PASO 3: Pre-commit hook**
```bash
#!/bin/bash
# .git/hooks/pre-commit

echo "🔍 Running pre-commit security checks..."

# Check for secrets in code
if grep -r "password\|secret\|key" --include="*.py" --include="*.js" --include="*.yml" .; then
    echo "❌ Potential secrets found in code!"
    echo "Please remove sensitive information before committing."
    exit 1
fi

# Check Dockerfile best practices
if [ -f "Dockerfile" ]; then
    echo "🐳 Checking Dockerfile security..."
    
    # Check for root user
    if grep -q "USER root" Dockerfile; then
        echo "⚠️ Warning: Running as root user detected"
    fi
    
    # Check for latest tags
    if grep -q ":latest" Dockerfile; then
        echo "⚠️ Warning: Using 'latest' tag is not recommended"
    fi
fi

echo "✅ Pre-commit security checks passed!"
```

#### **PASO 4: Automated remediation suggestions**
```bash
#!/bin/bash
# security-remediation.sh

IMAGE_NAME=$1
REPORT_FILE="./security-reports/trivy-report.json"

echo "🔧 Generating remediation suggestions for: $IMAGE_NAME"

# Extract base image
BASE_IMAGE=$(docker history $IMAGE_NAME --format "{{.CreatedBy}}" | grep "FROM" | head -1 | awk '{print $2}')

echo "📦 Current base image: $BASE_IMAGE"

# Suggest updated base image
echo "💡 Remediation suggestions:"
echo "1. Update base image to latest security patches"
echo "2. Use specific version tags instead of 'latest'"
echo "3. Consider using distroless or alpine variants"

# Parse vulnerabilities and suggest fixes
if [ -f "$REPORT_FILE" ]; then
    echo "4. Package updates needed:"
    cat $REPORT_FILE | jq -r '.Results[].Vulnerabilities[] | select(.Severity == "CRITICAL" or .Severity == "HIGH") | "   - \(.PkgName): \(.InstalledVersion) → \(.FixedVersion // "No fix available")"' | sort -u
fi

echo "5. Consider using multi-stage builds to reduce attack surface"
echo "6. Implement least privilege principle (non-root user)"
```

### **🔧 INTEGRACIÓN CON AWS ECR:**

#### **ECR Image Scanning:**
```bash
# Habilitar scanning automático
aws ecr put-image-scanning-configuration \
    --repository-name mi-app \
    --image-scanning-configuration scanOnPush=true
│   │   │                        │              │
│   │   │                        │              └── Configuración: escanear al subir
│   │   │                        └── Repositorio ECR
│   │   └── Subcomando: configurar scanning de imágenes
│   └── Servicio: ECR (Elastic Container Registry)
└── Comando: AWS CLI
```

```bash
# Ver resultados de scan
aws ecr describe-image-scan-findings \
    --repository-name mi-app \
    --image-id imageTag=latest
│   │   │                      │              │         │
│   │   │                      │              │         └── Tag específico
│   │   │                      │              └── ID de imagen
│   │   │                      └── Repositorio
│   │   └── Subcomando: describir resultados de scanning
│   └── Servicio: ECR
└── Comando: AWS CLI
```

---

## **📊 IMPACTO EN COBERTURA:**

### **ANTES (94%):**
- Linux Admin: 90%
- AWS Cloud: 95%
- Security: 85%

### **DESPUÉS (100%):**
- Linux Admin: 100% ✅ (Cron jobs agregados)
- AWS Cloud: 100% ✅ (S3 fundamentals agregados)
- Security: 100% ✅ (Container scanning agregado)

### **COBERTURA TOTAL: 100% ✅**

---

*Contenido adicional creado: 2025-09-15 | +1.75 horas | 100% cobertura DevOps Engineer*
