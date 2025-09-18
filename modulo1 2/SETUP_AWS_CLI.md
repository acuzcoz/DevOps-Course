# ☁️ SETUP AWS CLI - DESDE CERO ABSOLUTO

**Tecnología:** AWS CLI + AWS Account  
**Objetivo:** Configurar gestión de AWS desde terminal  
**Nivel:** Principiante absoluto

---

## **🎯 ¿QUÉ ES AWS CLI?**

**Problema que resuelve:**
- Gestionar AWS solo desde navegador (lento) ❌
- No poder automatizar deployments
- No poder crear scripts de infraestructura
- Clicks manuales propensos a errores

**Solución AWS CLI:**
- **Gestión completa** desde terminal
- **Automatización** con scripts
- **Integración** con CI/CD
- **Infraestructura como código**

---

## **📥 SETUP PASO A PASO**

### **PASO 1: Crear cuenta AWS**
1. Ve a: https://aws.amazon.com
2. Clic en "Create an AWS Account"
3. Proporciona email y contraseña
4. Elige "Personal" account type
5. Proporciona información de contacto
6. **Importante:** Proporciona tarjeta de crédito (para verificación)
7. Verifica tu teléfono (SMS o llamada)
8. Selecciona "Basic Support Plan" (gratuito)

**💡 Nota:** AWS Free Tier incluye muchos servicios gratuitos por 12 meses.

### **PASO 2: Instalar AWS CLI v2**
```bash
brew install awscli
│     │       │
│     │       └── Paquete: AWS Command Line Interface
│     └── Subcomando: instalar paquete
└── Comando: Homebrew (gestor de paquetes macOS)
```

### **PASO 3: Verificar instalación**
```bash
aws --version
│   │
│   └── Flag: mostrar versión instalada
└── Comando: AWS CLI
```

**Resultado esperado:**
```
aws-cli/2.15.0 Python/3.11.6 Darwin/23.0.0 exe/x86_64 prompt/off
```

### **PASO 4: Crear usuario IAM (Identity and Access Management)**

**¿Por qué no usar root?** El usuario root tiene acceso total - es inseguro para uso diario.

**En AWS Console:**
1. Busca "IAM" en el buscador
2. Clic en "Users" → "Create user"
3. Username: `cli-user` (o tu preferencia)
4. Selecciona "Provide user access to AWS Management Console" (opcional)
5. Clic "Next"
6. Selecciona "Attach policies directly"
7. Busca y selecciona: `PowerUserAccess` (para aprendizaje)
8. Clic "Next" → "Create user"

### **PASO 5: Crear Access Keys**
1. Clic en el usuario recién creado
2. Tab "Security credentials"
3. Scroll down a "Access keys"
4. Clic "Create access key"
5. Selecciona "Command Line Interface (CLI)"
6. Marca "I understand..." → "Next"
7. Description: "CLI Access" → "Create access key"
8. **¡IMPORTANTE!** Copia y guarda:
   - **Access Key ID:** `AKIA...`
   - **Secret Access Key:** `wJalrXUt...`

**⚠️ CRÍTICO:** El Secret Access Key solo se muestra una vez. Guárdalo seguro.

### **PASO 6: Configurar AWS CLI**
```bash
aws configure
│   │
│   └── Subcomando: configurar credenciales y región
└── Comando: AWS CLI
```

**Proceso interactivo:**
```
AWS Access Key ID [None]: AKIA... (pega tu Access Key ID)
AWS Secret Access Key [None]: wJalrXUt... (pega tu Secret Access Key)
Default region name [None]: us-east-1 (región recomendada)
Default output format [None]: json (formato recomendado)
```

---

## **🔧 VERIFICACIÓN DE CONFIGURACIÓN**

### **Verificar configuración:**
```bash
aws configure list
│   │         │
│   │         └── Subcomando: mostrar configuración actual
│   └── Subcomando: gestionar configuración
└── Comando: AWS CLI
```

**Resultado esperado:**
```
      Name                    Value             Type    Location
      ----                    -----             ----    --------
   profile                <not set>             None    None
access_key     ****************AKIA shared-credentials-file
secret_key     ****************wJal shared-credentials-file
    region                us-east-1      config-file    ~/.aws/config
```

### **Verificar identidad:**
```bash
aws sts get-caller-identity
│   │   │
│   │   └── Subcomando: obtener información del usuario actual
│   └── Servicio: Security Token Service (autenticación)
└── Comando: AWS CLI
```

**Resultado esperado:**
```json
{
    "UserId": "AIDACKCEVSQ6C2EXAMPLE",
    "Account": "123456789012",
    "Arn": "arn:aws:iam::123456789012:user/cli-user"
}
```

### **Probar comando básico:**
```bash
aws ec2 describe-regions
│   │   │
│   │   └── Subcomando: listar todas las regiones disponibles
│   └── Servicio: Elastic Compute Cloud
└── Comando: AWS CLI
```

**¿Para qué sirve?** Ver todas las regiones de AWS disponibles.

---

## **📚 COMANDOS BÁSICOS APRENDIDOS**

### **Configuración:**
```bash
aws configure              # Configurar credenciales interactivamente
aws configure list         # Ver configuración actual
aws configure set region us-west-2  # Cambiar región
```

### **Identidad y autenticación:**
```bash
aws sts get-caller-identity    # Ver información del usuario actual
aws sts get-account-id         # Ver ID de la cuenta AWS
```

### **EC2 (Elastic Compute Cloud):**
```bash
aws ec2 describe-regions       # Listar regiones disponibles
│   │   │
│   │   └── Subcomando: obtener información de regiones
│   └── Servicio: EC2
└── Comando: AWS CLI

aws ec2 describe-instances     # Listar instancias EC2
│   │   │
│   │   └── Subcomando: obtener información de instancias
│   └── Servicio: EC2
└── Comando: AWS CLI
```

### **S3 (Simple Storage Service):**
```bash
aws s3 ls                      # Listar buckets S3
│   │  │
│   │  └── Subcomando: listar buckets
│   └── Servicio: S3
└── Comando: AWS CLI
```

---

## **🔍 CONCEPTOS FUNDAMENTALES**

### **Regiones y Zonas de Disponibilidad:**
- **Región:** Ubicación geográfica (us-east-1, eu-west-1)
- **AZ:** Centros de datos dentro de una región
- **Latencia:** Elige región cercana a tus usuarios

### **Servicios principales:**
- **EC2:** Servidores virtuales (como VPS)
- **S3:** Almacenamiento de archivos
- **RDS:** Bases de datos gestionadas
- **Lambda:** Funciones serverless

### **IAM (Identity and Access Management):**
- **Users:** Personas o aplicaciones
- **Roles:** Permisos temporales
- **Policies:** Reglas de qué se puede hacer

---

## **✅ VERIFICACIÓN FINAL**

### **Comandos de verificación:**
```bash
# 1. AWS CLI instalado
aws --version

# 2. Configuración correcta
aws configure list

# 3. Autenticación funcionando
aws sts get-caller-identity

# 4. Acceso a servicios
aws ec2 describe-regions
aws s3 ls

# 5. Información de cuenta
aws sts get-account-id
```

### **Estado esperado:**
- ✅ AWS CLI v2 instalado
- ✅ Credenciales configuradas
- ✅ Región configurada (us-east-1)
- ✅ Autenticación exitosa
- ✅ Acceso a servicios AWS

---

## **🚀 PRÓXIMO PASO**

**Una vez completado este setup:**
- Puedes gestionar AWS desde terminal
- Puedes crear scripts de automatización
- Preparado para Infrastructure as Code
- Listo para deployments automatizados

**Siguiente:** Crear primera instancia EC2

---

## **🔧 TROUBLESHOOTING COMÚN**

### **Problema: "aws command not found"**
- **Causa:** AWS CLI no instalado
- **Solución:** `brew install awscli`

### **Problema: "Unable to locate credentials"**
- **Causa:** No configurado o mal configurado
- **Solución:** `aws configure` con credenciales correctas

### **Problema: "Access Denied"**
- **Causa:** Usuario IAM sin permisos suficientes
- **Solución:** Agregar políticas necesarias en IAM

### **Problema: "Invalid region"**
- **Causa:** Región mal escrita o no existe
- **Solución:** `aws ec2 describe-regions` para ver regiones válidas

### **Problema: "Signature expired"**
- **Causa:** Reloj del sistema desincronizado
- **Solución:** Sincronizar fecha y hora del sistema

---

## **💰 COSTOS Y FREE TIER**

### **AWS Free Tier incluye:**
- **EC2:** 750 horas/mes de t2.micro (12 meses)
- **S3:** 5GB de almacenamiento (12 meses)
- **RDS:** 750 horas/mes de db.t2.micro (12 meses)
- **Lambda:** 1M requests/mes (permanente)

### **⚠️ Importante:**
- Siempre revisar costos en AWS Billing
- Configurar alertas de facturación
- Terminar recursos no utilizados

---

**🎯 AWS CLI configurado exitosamente - Listo para gestión cloud desde terminal** ✅
