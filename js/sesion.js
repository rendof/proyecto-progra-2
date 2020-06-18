window.addEventListener("load", function() {
  //Aca voy a hacer la funcion para que se guarden los datos dentro del localStorage

  //LOG IN (lo hago en este para no crear t linkear más archivos js)
  var logForm = document.querySelector(".LogIn")
  // Aca voy a buscar los datos dentro del formulario del modal donde el name sea igual
  // a "nombre" y a "email"
  var nombre = document.querySelector("[name=nombre]")
  var email = document.querySelector("[name=email]")
  var nombreUsuario = "";

  // validacion email
  //Una vez que se envie la informacion quiero que se envie de cierta manera, por ende la funcion siguiente va a restringir ciertos parametros
  logForm.onsubmit = function(event){
    
    var regaxEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (nombre.value == "" || email.value == "" ) {
      event.preventDefault()
      UIkit.notification({
        //Le sale una notification
        message: 'Llene los tres campos por favor',
        status: 'primary',
        pos: 'top-center',
        timeout: 3000
      });
    }
  // Si uno de los valores esta vacio
  // Si todos los campos estan llenos, y el email no cumple las caracteristicas
    else if (regaxEmail.test(email.value) == false) {
      event.preventDefault()
      UIkit.notification({
        message: 'Ingrese una direccion de correo valida',
        status: 'primary',
        pos: 'top-center',
        timeout: 3000
        });
    }
      guardarUsuarios()
      //corre la funcion
  }

  //info log in

  function guardarUsuarios(){
    //estoy guardando la informacion captada en el localStorage
    localStorage.setItem('nombre', nombre.value)
    localStorage.setItem('email', email.value)
    }

  obtenerUsuarios()
    //la funcion obtenerUsuarios permite capturar el nombre del localStorage para despues imprimirlo
  function obtenerUsuarios(){
    nombreUsuario = localStorage.getItem("nombre")
  }

  var nombre_usuario = document.querySelector("#nombre_usuario")
  var cierroSesionButton = document.querySelector("#cierroSesion")

  if (nombreUsuario !== "") {
    document.querySelector("#a_usuario").style.display = "none"
    cierroSesionButton.style.display = "block"
    nombre_usuario.innerText = 'Bienvenido, ' + nombreUsuario
    document.querySelector(".usuarioDentro").style.display = "block"
  }

  function borrarUsuario(){
    localStorage.removeItem('nombre', nombre.value);
    localStorage.removeItem('email', email.value);
  }

  cierroSesionButton.onclick = function(){
    borrarUsuario();
    location.reload();
  }
  // alert(nombreUsuario)
    if (nombreUsuario == null) {
      document.querySelector("#a_usuario").style.display = "block"
      cierroSesionButton.style.display = "none"
      document.querySelector(".usuarioDentro").style.display = "none"
      nombre_usuario.innerText = "";

    }
})
