# Proyecto Detailing - API

Backend API para el proyecto Detailing construido con Express.js, MongoDB y Firebase.

## 🚀 Deployment en Vercel

### Pre-requisitos
1. Cuenta en [Vercel](https://vercel.com)
2. [Vercel CLI](https://vercel.com/docs/cli) instalado (opcional)

### Configurar Variables de Entorno en Vercel

Antes de desplegar, debes configurar las siguientes variables de entorno en tu proyecto de Vercel:

1. Ve a tu proyecto en Vercel Dashboard
2. Navega a **Settings** → **Environment Variables**
3. Agrega todas las variables de tu archivo `.env`:

```
MONGODB_URI=tu_mongodb_uri
PORT=3000
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_PRIVATE_KEY_ID=tu_private_key_id
FIREBASE_PRIVATE_KEY=tu_private_key
FIREBASE_CLIENT_EMAIL=tu_client_email
FIREBASE_CLIENT_ID=tu_client_id
FIREBASE_AUTH_URI=tu_auth_uri
FIREBASE_TOKEN_URI=tu_token_uri
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=tu_auth_provider_cert_url
FIREBASE_CLIENT_X509_CERT_URL=tu_client_cert_url
FIREBASE_UNIVERSE_DOMAIN=tu_universe_domain
```

### Deployment Manual (Vercel Dashboard)

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Click en "Add New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente la configuración
5. Configura las variables de entorno
6. Click en "Deploy"

### Deployment con CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Desplegar
vercel

# Desplegar a producción
vercel --prod
```

## 🛠️ Desarrollo Local

### Instalación

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env
# Luego edita .env con tus valores
```

### Scripts Disponibles

```bash
# Modo desarrollo (con hot reload)
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📁 Estructura del Proyecto

```
proyecto_detailing/
├── api/              # Punto de entrada para Vercel
│   └── index.ts
├── src/
│   ├── app.ts        # Configuración de Express
│   ├── index.ts      # Servidor local
│   ├── db.ts         # Conexión a MongoDB
│   ├── firebase.ts   # Configuración de Firebase
│   ├── models/       # Modelos de Mongoose
│   ├── routes/       # Rutas de la API
│   └── middlewares/  # Middlewares personalizados
├── vercel.json       # Configuración de Vercel
└── package.json
```

## 🔗 Endpoints

Una vez desplegada, tu API estará disponible en:
- Desarrollo: `http://localhost:3000`
- Producción: `https://tu-proyecto.vercel.app`

### Rutas principales:
- `GET /` - Health check
- `POST /api/*` - Tus rutas de API

## ⚠️ Notas Importantes

1. **MongoDB Atlas**: Asegúrate de que tu MongoDB esté en la nube (MongoDB Atlas) y sea accesible desde Vercel
2. **Firebase**: Las credenciales de Firebase deben estar en las variables de entorno de Vercel
3. **CORS**: El CORS está configurado para aceptar peticiones desde cualquier origen (`*`). En producción, considera restringirlo a tus dominios específicos
4. **Cold Starts**: Las funciones serverless pueden tener "cold starts" la primera vez que se ejecutan

## 📝 License

ISC