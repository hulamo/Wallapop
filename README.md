Práctica de javascript frontend
HUGO MORENO

-------------

BASE DE DATOS

Este desarrollo requiere de una base de datos SPARREST.JS que se descarga del siguiente repositorio git.

https://github.com/kasappeal/sparrest.js.git

En este servidor está un archivo db.json que es la base de datos de este desarrollo, esta base de datos se tiene que sustituir por la que tiene el proyecto de sparrest.js o bien empezar de nuevo.

Em el directorio de imagenes de este proyecto hay archivos de imagenes que e tiene que copiar al directorio de public del proyecto del servidor de sparrest.js. Estas son las imagenes de los anuncios que se han subido.

------------------

PROYECTO:

El index.html es la página principal de nuestra aplicación, si no hay usuario logueado, se redireccionará a login.html.

El código principal se encuentra en index.js.

El proyecto tiene la funcionalidad de registrar usuarios y una vez registrado un usuario hacer login. En el menú de hamburguesa vienen las opciones de 

Home --> Que es la página principal dónde se muestran todos los anuncios.
Crear un anuncio --> Para crear un nuevo annuncio.
Salir --> Para hacer logout.

Cuando se listan los anuncios, cada anuncio en el título tiene un hyperlink que nos lleva al detalle del anuncio.

En el detalle del anuncio se puede borrar un anuncio siempre y cuando este haya sido creado por el usuario que está logueado.

En la opción de crear anuncios se puede crear un nuevo anuncio, aquí se pone título, descripción, precio, si es compra o venta, tiene una opción para poner tags o removerlas y también para subir un archivo.

Los errores tando de creación de usuarios como de registro de anuncios están manejados por mensajes.js

Cuando se muestran los anuncios hay una barra para búsqueda esta barra busca en los campos de título del anuncio, descripción y compra / venta.

------------------

Faltó poder buscar por tags espéfificos y poner checkbox por compra o venta el anterior se puede colocar la palabara compra o venta en el search box.




