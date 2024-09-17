document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginLogin");
    const registrationForm = document.getElementById("registroRegistro");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const usersData = JSON.parse(localStorage.getItem("users")) || [];
      const user = usersData.find(user => user.email === email && user.password === password);
  
      if (user) {
        Swal.fire({
          icon: 'success',
          title: '¡Iniciaste sesión exitosamente!',
          text: 'Bienvenido de nuevo al sistema',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          // Código adicional que puedes agregar después de iniciar sesión exitosamente
          window.location.href='./pages/feed.html'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error de inicio de sesión',
          text: 'El correo electrónico o la contraseña son incorrectos o no existen',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  
    registrationForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = document.getElementById("nameRegistro").value;
      const email = document.getElementById("emailRegistro").value;
      const password = document.getElementById("passwordRegistro").value;
  
      const user = { name, email, password };
  
      const usersData = JSON.parse(localStorage.getItem("users")) || [];
      usersData.push(user);
  
      localStorage.setItem("users", JSON.stringify(usersData));
  
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido a Innus',
        text: 'Registro exitoso',
        showConfirmButton: false,
        timer: 4000
      }).then(() => {
        // Código adicional que puedes agregar después de un registro exitoso
        window.location.href='index.html'
      });
    });
  });