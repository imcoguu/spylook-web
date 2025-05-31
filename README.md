# Spylook 👀

Este proyecto consiste en dotar a [SpyLook](https://github.com/cdominguezh06/spylook) de una página web desde la que conocer la aplicación a fondo y ofrecer enlaces de descarga,
conectandose a la API REST de GitHub y listando todos los releases publicados en el repositorio hasta la fecha


# Funcionamiento de la web

La web está construida utilizando [Angular 19.2.11](https://v19.angular.dev), con TailwindCSS aportando clases de CSS predefinidas
para estilar la página

Además se ha hecho uso de [AngularCLI GhPages](https://www.npmjs.com/package/angular-cli-ghpages) para el deploy de la página web en
GitHub Pages, ofreciendo así un hosting gratuito lo suficientemente maleable para este proyectoo


# Estructura

La estructura de la página web está dividida en varios componentes de Angular:
```
components/
 ├── download/        # El release más reciente de la aplicación
 ├── features/        # Imagen de la aplicación que cambia según la característica sobre la que poses el ratón
 ├── footer/          # Pie de página
 ├── header/          # Cabecera de la página con enlace a repositorio, apartado de características y perfil de GitHub
 ├── hero/            # Banner de inicio de la página, con botón de CTA (Call To Action) que lleva al componente download
 └── timeline/        # Lista de todos los releases de la aplicación, ordenados de más reciente a más antiguo
```

A su vez, el proyecto cuenta con los siguientes directorios adicionales:

```
app/
 ├── pipes/
 │    └── replace-tags.pipe.ts        # Clase que acepta un texto en Markdown sin formatear 
 │                                      y reemplaza el etiquetado Markdown por etiquetas HTML estiladas
 └── services/
      ├── global-effects.service.ts   # Servicio que aplica animaciones y efectos interactivos a elementos del DOM
      └── git-hub.service.ts          # Servicio que toma de la API REST de GitHub el historial de releases de SpyLook
```

# Componentes

A continuación se detalla el funcionamiento de cada componente en orden de aparición

## HeaderComponent

Todo su contenido es almacenado en una etiqueta `<header>` con un efecto de arcoíris como color de fondo
Cuenta con un título `<h1>` que redirige al repositorio de la app de Android y un elemento `<nav>` con enlaces
al apartado de características y al perfil de GitHub


## HeroComponent

Todo su contenido se almacena en una etiqueta `<section>` con fondo negro. 
El título `<h1>` es modificado por `global-effects.service.ts` para tener un color arcoíris cuyo
color rojo sigue la posición del ratón al posicionarse sobre este

## FeaturesComponent

Section que almacena una imagen y varios `<div>` con la clase CSS `gradient-border` para que `global-effects.service.ts`
aplique un efecto de gradiente interactivo al borde de los elementos
