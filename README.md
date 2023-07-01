# Trabajo Practico Mercado Web - Modulo 6

## Proyecto 🚀

En este desafío deberás construir un servidor con Express que utilice el motor de plantillas Handlebars para desarrollar componentes y renderizar variables e iteradores en el template del sitio web.

## Integrantes ⭐️

-   Linda Fiedler
-   María Díaz
-   Camila Belén
-   Sebastián Zapata
-   Víctor Araya
-   ...

## Ejercicio Propuesto

El Mini Market “Come Sano, Come Fresco Spa” está interesado en contratar un freelancer para que desarrolle una aplicación en donde puedan ofrecer y vender sus alimentos de forma online en la web. No obstante, por su modelo de negocio han advertido que constantemente necesitarán hacer actualizaciones en su presentación, contenido y funcionalidades, por lo que se plantea desarrollar un sistema compuesto por parciales para poder abordar los cambios de una manera más rápida y cómoda.

## Requerimientos 🪖

1. Crear una ruta raíz que al ser consultada renderice una vista con un parcial “Dashboard” enviándole en el render un arreglo con los nombres de los productos. Se recomienda que estos coincidan con las imágenes de cada producto.
2. Incluir en la vista un parcial que contenga el menú del sitio web y sea renderizado antes del Dashboard.
3. Crear un parcial “producto” que contenga el template correspondiente a la presentación de cada producto en el Dashboard y reciba como parámetro el nombre del producto.
4. Crear un parcial para la sección principal en donde se renderice un helper con el mensaje de bienvenida y se realice una iteración para renderizar un parcial “producto” pasándole como argumento el nombre de cada producto.
5. Consumir los códigos fuentes de Bootstrap y jQuery a través de rutas o middlewares creados en el servidor. Estas dependencias deben ser instaladas con NPM.

## Requisitos tecnicos

-   Debe tener NodeJS v18 o superior ya instalado.

## Instalación - Ejecución 🤖

1. Descargue este repositorio y dentro del proyecto en una terminal ingrese: `npm install` para instalar los modulos que ya se encuentran declarados en el package.json.
2. Posteriormente puede iniciar el servicio con `node index.js` o `npm run start`
3. Visualice el proyecto en un navegador web moderno en la ruta raiz `http://localhost/`.
4. Para cancelar la ejecución presione Ctrl + C en la terminal.

## Modulos y lenguaje útilizados

En este proyecto se utilizó principalmente

-   JavaScript ES6.
-   NodeJS >= v18.16.
-   Express v4.18.2.
-   Express-handlebars v7.0.7.

---

Codeado(⌨️) con ❤️ por GRUPO 2
