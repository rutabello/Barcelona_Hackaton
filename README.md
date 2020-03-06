# Documentación

## RoadMap

####Main Page:

* Dividir juegos en secciones dependindo del contenido.
* Mostrar los mas populares en la main page.
* Los juegos que esten relacionados con secciones añadir en la pagina de la vanguardia
* Dar funcionalidad al dropdown de categorias y filtrar los juegos en función de ellas



####Mejorar la experiencia del usuario:

######Objetivos a cumplir con los juegos creados
* Conseguir que el usuario pase más tiempo en la página.
* Conseguir que el usuario comparta en las redes sociales los juegos o las puntuaciones obtenidas.
* Fidelizar a los usuarios
* Mayor interaccion en los juegos

######Mejoras a implementar

1. Conectar usuarios con la api propia de la vanguardia para obtener la informacion del usuario.

      1.1 Log con constraseña
2. Crear un historico de las puntaciones de cada juego.

3. Añadir links a las redes sociales para que el usuario comparta los juegos o sus puntuaciones.

4. Competir con otros usuarios y crear un ranking.

5. Compensaciones en relación a los premios para las cuentas premium para conseguir más suscripciones premium fidelizando a los usuario.



####Juegos:

Mejoras en los juegos:

Guardar puntuaciones en el perfil de usuario
y recoger las existentes para añadirlas.

- Capitales:

* Crear un filtro para el juego de seleccion la zona geográfica o los continentes.

    * A traves de la api en el momento en el que recogemos la data con axios pasamos por el filtro la zona o continente que incluiriamos dentro de la url de la cual sacamos esa data ya con el primer filtro pra pasarla al juego.

    Actualmente el juego está realizado llamando a una Api externa pero se podría realizar con cualquier contenido de la Api propia de la Vanguardia.
* Segundo juego "¿Qué capital tiene más población?"
    * También desde la api tenemos la posibilidad de recuperar las poblciones y en este caso es comparar este numero integro y decir que el ganador simpre sera el mayor y a partir de ahí, si la respuesta es correcta cambiar por otro país aleatorio, el que no fue seleccionado.

- Futbol
* Cambiar el cursor a una imagen de animacion.
* Añadir la posibilidad de jugar con dos equipos
mejorar el diseño.
* Añadir niveles de dificultad.


- Mapa:
* Mostrar más pines de paises ya que actualmente muestra solo el que has seleccionado.

* Crear un temporizador

##Más juegos:

- Juego sección de sociedad: aparece el nombre de un personaje y varias imagenes debes seleccionar la que corresponda con la persona nombrada.
- Juego vivo/muerto soltero/casado.. buscar en el contenido como hacer la comprobación. aparece un personaje y debes seleccionar la opción correcta, dependiendo de la sección personalizariamos el juego según la temática. creariamos una funcion que comparara con la informacion del contenido de la Vanguardia, sobre personajes publicos y devuelve si la opción seleccionada es correcta o no, se realizaría con un condicional.
- Juego para todas las secciones: Aparece la frase de un personaje y se debe seleccionar dentro de las opciones que apareceran quien es la persona que dijo esa frase. se realizaría con una lógica parecida a la del juego de capitales.
