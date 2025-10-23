# 🎬 MoviesApp - Aplicación de Películas

Una aplicación móvil moderna desarrollada con React Native y Expo que permite explorar películas populares, mejor calificadas y próximos estrenos utilizando la API de The Movie Database (TMDB).

## ✨ Características

- **🎭 Exploración de Películas**: Descubre películas en cartelera, populares, mejor calificadas y próximos estrenos
- **📱 Diseño Moderno**: Interfaz intuitiva con NativeWind (Tailwind CSS para React Native)
- **🔄 Navegación Fluida**: Implementada con Expo Router para una experiencia de usuario optimizada
- **⚡ Rendimiento Optimizado**: Utiliza React Query para caché inteligente y gestión de estado
- **🎨 Componentes Reutilizables**: Arquitectura modular con componentes bien estructurados
- **📊 Paginación Infinita**: Carga progresiva de contenido para mejor rendimiento
- **🎯 Detalles Completos**: Páginas de detalle con información completa de películas y elenco

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React Native** (0.81.5) - Framework principal
- **Expo** (~54.0.19) - Plataforma de desarrollo
- **TypeScript** (~5.9.2) - Tipado estático
- **NativeWind** (^4.2.1) - Styling con Tailwind CSS
- **Expo Router** (~6.0.13) - Navegación basada en archivos

### Estado y Datos
- **TanStack Query** (^5.90.5) - Gestión de estado del servidor
- **Axios** (^1.12.2) - Cliente HTTP
- **React Query** - Caché y sincronización de datos

### UI/UX
- **React Native Reanimated** (^4.1.3) - Animaciones fluidas
- **React Native Gesture Handler** (~2.28.0) - Gestos nativos
- **Expo Linear Gradient** (~15.0.7) - Gradientes
- **Expo Image** (~3.0.10) - Optimización de imágenes

### Desarrollo
- **ESLint** (^9.25.0) - Linting de código
- **Prettier** - Formateo de código
- **Metro** - Bundler de React Native

## 📱 Capturas de Pantalla

> *Las capturas de pantalla se pueden agregar aquí mostrando las diferentes pantallas de la aplicación*

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Expo CLI
- Cuenta de desarrollador de The Movie Database (TMDB)

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/movies-app.git
   cd movies-app
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configura las variables de entorno**
   
   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   EXPO_PUBLIC_MOVIE_DB_URL=https://api.themoviedb.org/3
   EXPO_PUBLIC_MOVIE_DB_KEY=tu_api_key_de_tmdb
   ```

4. **Obtén tu API Key de TMDB**
   - Ve a [The Movie Database](https://www.themoviedb.org/settings/api)
   - Crea una cuenta gratuita
   - Solicita una API Key
   - Copia la API Key al archivo `.env`

5. **Ejecuta la aplicación**
   ```bash
   # Para desarrollo
   npm start
   
   # Para Android
   npm run android
   
   # Para iOS
   npm run ios
   
   # Para Web
   npm run web
   ```

## 📁 Estructura del Proyecto

```
movies-app/
├── app/                          # Páginas de la aplicación (Expo Router)
│   ├── _layout.tsx              # Layout principal
│   ├── index.tsx                # Página de inicio
│   ├── home/                    # Pantalla principal
│   └── movie/[id].tsx           # Detalle de película
├── core/                        # Lógica de negocio
│   ├── actions/                 # Acciones para obtener datos
│   └── api/                     # Configuración de API
├── infrastructure/              # Capa de infraestructura
│   ├── interfaces/              # Tipos TypeScript
│   └── mappers/                 # Transformadores de datos
├── presentation/                # Capa de presentación
│   ├── components/              # Componentes reutilizables
│   └── hooks/                   # Hooks personalizados
├── config/                      # Configuraciones
└── assets/                      # Recursos estáticos
```

## 🏗️ Arquitectura

El proyecto sigue una arquitectura limpia con separación de responsabilidades:

- **Core**: Contiene la lógica de negocio y acciones
- **Infrastructure**: Maneja interfaces, mappers y transformaciones de datos
- **Presentation**: Componentes UI y hooks personalizados
- **App**: Páginas y navegación

### Patrones Implementados

- **Repository Pattern**: Para abstracción de datos
- **Custom Hooks**: Para lógica reutilizable
- **Component Composition**: Para componentes modulares
- **Type Safety**: TypeScript en toda la aplicación

## 🎯 Funcionalidades Principales

### Pantalla Principal
- Carrusel de películas en cartelera
- Lista horizontal de películas populares
- Sección de mejor calificadas con paginación infinita
- Próximos estrenos

### Detalle de Película
- Información completa de la película
- Elenco y reparto
- Descripción detallada
- Imágenes de alta calidad

### Optimizaciones
- Caché inteligente con React Query
- Lazy loading de imágenes
- Paginación infinita
- Gestión eficiente de memoria

## 🔧 Scripts Disponibles

```bash
npm start          # Inicia el servidor de desarrollo
npm run android    # Ejecuta en Android
npm run ios        # Ejecuta en iOS
npm run web        # Ejecuta en Web
npm run lint       # Ejecuta el linter
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


## 👨‍💻 Autor

**Danilo Coronel**
- GitHub: [@Danilocb25](https://github.com/Danilocb25)
- LinkedIn: [https://linkedin.com/danilo-coronelb/](https://linkedin.com/danilo-coronelb/)


