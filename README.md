# Weather Web

Una aplicacion web del clima moderna con estetica retro, disenada para consultar el tiempo actual y pronostico de cualquier ciudad del mundo. Construida con las ultimas tecnologias de React y Next.js para ofrecer una experiencia rapida y fluida.

## Demo

### Buscando ciudades
<!-- Buscar.ciudad.mp4 -->

### Vista de ciudades populares
<!-- Populares.mp4 -->

## Caracteristicas principales

- **Buscar ciudades**: Consulta el clima de cualquier ciudad del mundo
- **Ciudades populares**: Acceso rapido a Madrid, Valencia y Barcelona
- **Ciudades guardadas**: Seccion para ciudades favoritas
- **Pronostico de 5 dias**: Visualiza la temperatura media de los proximos dias
- **Iconos dinamicos**: Iconos SVG que cambian segun las condiciones climaticas
- **Diseno responsivo**: Adaptado para escritorio y movil
- **Estetica retro**: Interfaz con fuente pixel VT323 y tema oscuro

## Tecnologias utilizadas

- **Next.js 16** - Framework de React con Server Components
- **React 19** - Libreria de UI
- **TypeScript** - Tipado estatico
- **Tailwind CSS 4** - Framework de estilos utility-first
- **OpenWeatherMap API** - Datos meteorologicos en tiempo real
- **Server Actions** - Llamadas al servidor sin API routes

## Arquitectura del proyecto

El proyecto sigue una estructura modular con separacion entre componentes de servidor y cliente:

- **Server Components**: Popular y Safe cargan datos directamente en el servidor
- **Client Components**: Search maneja interactividad del usuario
- **Server Actions**: Llamadas seguras a la API desde el servidor
- **Tipos compartidos**: Definiciones TypeScript centralizadas

## Instalacion y configuracion

1. Clona el repositorio:

```bash
git clone https://github.com/KrlsDev/weather-web.git
```

2. Instala las dependencias:

```bash
cd weather-web
npm install
```

3. Configura las variables de entorno:

Crea un archivo `.env.local` en la raiz del proyecto:

```
OPENWEATHER_API_KEY=tu_api_key_aqui
```

Puedes obtener una API key gratuita en [OpenWeatherMap](https://openweathermap.org/api)

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## Autor

Carlos Moreno Delgado

- GitHub: [KrlsDev](https://github.com/KrlsDev)
- LinkedIn: [carlos-m-d](https://www.linkedin.com/in/carlos-m-d)
- Email: car.mor.delgado@gmail.com

---

⭐ Si este proyecto te ha sido útil, considera darle una estrella en GitHub

💻 Desarrollado con ❤️ usando Next.js y React
