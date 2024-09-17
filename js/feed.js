 // Función para agregar un enlace a la lista de enlaces
 function agregarEnlace() {
    const linkInput = document.getElementById('linkInput');
    const enlace = linkInput.value.trim();

    if (enlace !== '') {
        // Obtener la lista de enlaces del localStorage o inicializarla si es la primera vez
        let enlaces = JSON.parse(localStorage.getItem('enlaces')) || [];

        // Agregar el nuevo enlace a la lista de enlaces
        enlaces.push({ type: 'link', content: enlace });

        // Guardar la lista actualizada en el localStorage
        localStorage.setItem('enlaces', JSON.stringify(enlaces));

        // Limpiar el campo de entrada y actualizar la lista de enlaces en la página
        linkInput.value = '';
        mostrarEnlaces();
    }
}

// Función para eliminar un enlace de la lista de enlaces
function eliminarEnlace(index) {
    let enlaces = JSON.parse(localStorage.getItem('enlaces')) || [];
    enlaces.splice(index, 1);
    localStorage.setItem('enlaces', JSON.stringify(enlaces));
    mostrarEnlaces();
}

// Función para mostrar los enlaces y tareas guardadas en la lista
function mostrarEnlaces() {
    const enlacesList = document.getElementById('enlacesList');
    const enlaces = JSON.parse(localStorage.getItem('enlaces')) || [];

    // Limpiar la lista antes de actualizarla
    enlacesList.innerHTML = '';

    // Agregar cada enlace o tarea a la lista
    enlaces.forEach((item, index) => {
        const li = document.createElement('li');
        const icon = document.createElement('i');

        if (item.type === 'link') {
            const a = document.createElement('a');
            a.href = item.content;
            a.textContent = item.content;
            li.appendChild(a);
        } else if (item.type === 'text') {
            li.textContent = item.content;
        }

        // Agregar el ícono de eliminar (Font Awesome) al ícono de tarea
        icon.classList.add('fas', 'fa-trash', 'de');
        icon.setAttribute('data', 'eliminado');
        icon.setAttribute('id', index);
        icon.onclick = () => eliminarEnlace(index);
        li.appendChild(icon);

        enlacesList.appendChild(li);
    });
}

// Función para agregar una tarea a la lista de enlaces y tareas
function agregarTarea() {
    const tareaInput = document.getElementById('input');
    const tarea = tareaInput.value.trim();

    if (tarea !== '') {
        // Obtener la lista de enlaces y tareas del localStorage o inicializarla si es la primera vez
        let enlaces = JSON.parse(localStorage.getItem('enlaces')) || [];

        // Agregar la nueva tarea a la lista de enlaces y tareas
        enlaces.push({ type: 'text', content: tarea });

        // Guardar la lista actualizada en el localStorage
        localStorage.setItem('enlaces', JSON.stringify(enlaces));

        // Limpiar el campo de entrada y actualizar la lista de enlaces en la página
        tareaInput.value = '';
        mostrarEnlaces();
    }
}

// Llamar a la función mostrarEnlaces al cargar la página para mostrar los enlaces y tareas guardados previamente
mostrarEnlaces();