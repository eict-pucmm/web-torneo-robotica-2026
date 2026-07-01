# Torneo Interuniversitario de Robótica 2026 | PUCMM

Sitio web oficial del **Torneo Interuniversitario de Robótica 2026** organizado por la
Pontificia Universidad Católica Madre y Maestra (PUCMM). Es un sitio estático
(HTML, CSS y JavaScript) servido mediante Nginx dentro de un contenedor Docker.

## Características

- **Página única** con secciones de Inicio, Categorías, Cronograma, Reglas, Preguntas Frecuentes y Contacto.
- **Cuenta regresiva** en vivo hacia la fecha del evento.
- **Reglamento oficial** disponible en PDF (`assets/reglamento.pdf`).
- Diseño **responsive** con menú de navegación móvil.

## Estructura del proyecto

```
.
├── index.html          # Página principal con todas las secciones
├── style.css           # Estilos del sitio
├── script.js           # Lógica (menú, cuenta regresiva, interacciones)
├── assets/             # Imágenes y reglamento
│   ├── logo-pucmm.png
│   ├── logo-torneo.png
│   └── reglamento.pdf
├── Dockerfile          # Imagen Nginx con los archivos estáticos
├── docker-compose.yml  # Orquestación del servicio web
└── .dockerignore
```

## Requisitos

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/) (incluido en Docker Desktop y como plugin `docker compose`)

## Uso con Docker Compose

Levantar el sitio:

```bash
docker compose up -d --build
```

El sitio quedará disponible en [http://localhost:8080](http://localhost:8080).

Para usar otro puerto, define la variable `WEB_PORT`:

```bash
WEB_PORT=3000 docker compose up -d --build
```

Detener y eliminar el contenedor:

```bash
docker compose down
```

Ver los logs:

```bash
docker compose logs -f
```

## Uso solo con Docker

Si prefieres no usar Compose:

```bash
docker build -t torneo-robotica-2026 .
docker run -d -p 8080:80 --name torneo-robotica-2026 torneo-robotica-2026
```

## Desarrollo local

Al ser un sitio estático, puedes abrir `index.html` directamente en el navegador o
servirlo con cualquier servidor estático, por ejemplo:

```bash
python3 -m http.server 8080
```

Luego visita [http://localhost:8080](http://localhost:8080).

## Contacto

- gealmonte@pucmm.edu.do
- yscc0002@ce.pucmm.edu.do

---

© 2026 Pontificia Universidad Católica Madre y Maestra (PUCMM).
