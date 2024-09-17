/**
 * La función agrega una nueva imagen a una lista de imágenes en función de una URL proporcionada por
 * el usuario.
 */
function agregarElemento() {
    /* Esta línea de código obtiene el valor del elemento de entrada con el ID "nuevaURL" y lo asigna a
    la variable "nuevaURL". */
    let nuevaURL = document.getElementById("nuevaURL").value;
    /* Seleccionando el elemento HTML con el ID "image-list" y asignándolo a la variable "lista". */
    let lista = document.querySelector(".image-list");
    /* Esta línea de código está creando un nuevo elemento HTML de tipo "li" (elemento de lista) y
    asignándolo a la variable "nuevoItem". */
    let nuevoItem = document.createElement("div");
    /* Esta línea de código está creando un nuevo elemento HTML de tipo "img" (imagen) y asignándolo a
    la variable "nuevaImagen". */
    let nuevaImagen = document.createElement("img");
    /* `nuevaImagen.src = nuevaURL;` está configurando el atributo `src` del elemento `img` recién
    creado (`nuevaImagen`) al valor de la variable `nuevaURL`, que es la URL de la imagen
    proporcionada por el usuario. Esto establece la fuente de la imagen en la URL proporcionada, lo
    que permite que se muestre en la página web. */
    nuevaImagen.src = nuevaURL;
    /* `nuevoItem.classList.add("image-list-item");` agrega una clase CSS llamada "image-list-item" al
    elemento de lista recién creado (`nuevoItem`). Esta clase se puede usar para aplicar estilos
    específicos al elemento de la lista, como establecer un borde o cambiar el color de fondo. */
    nuevoItem.classList.add("image-list-item");
    /* `nuevoItem.appendChild(nuevaImagen);` agrega el elemento `img` recién creado (`nuevaImagen`)
    como elemento secundario del elemento `li` recién creado (`nuevoItem`). Esto significa que la
    imagen se mostrará dentro del elemento de la lista en la página web. */
    nuevoItem.appendChild(nuevaImagen);
    /* Esta línea de código establece el valor del elemento de entrada con el ID "nuevaURL" en una
    cadena vacía. Esto se hace para borrar el campo de entrada después de que el usuario haya
    enviado una URL para agregar una nueva imagen a la lista. */
    document.getElementById("nuevaURL").value = "";
    /* `lista.appendChild(nuevoItem);` agrega el elemento de lista recién creado (`nuevoItem`) como
    elemento secundario del elemento HTML con el ID "lista de imágenes" (`lista`). Esto significa
    que la nueva imagen se mostrará como parte de la lista en la página web. */
    lista.appendChild(nuevoItem);
}

function eliminarElemento() {
    let lista = document.getElementById("image-list");
    lista.removeChild(lista.lastChild);
}