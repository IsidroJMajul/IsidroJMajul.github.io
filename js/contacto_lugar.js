var formulario = document.getElementById("formulario")

let validarNombre = function(e){
       if (formulario.usuario.value == 0){
         alert("Completa el campo nombre");
         e.preventDefault();
       }
}

let validarMail = function(e){
       if (!mail.value.match  (/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/)){
              alert("Coloca un mail válido");
              e.preventDefault();
       }
}

let validarComentarios = function (e){
       if (comment.value == 0){
              alert("Completa tus comentarios");
              e.preventDefault();
       }
}

let validar = function(e){
       validarNombre(e);
       validarMail(e);
       validarComentarios(e);
     }

formulario.addEventListener('submit', validar);

// Agregar una ventana de SALUDO (ej. Tu msj ha sido correctamente enviado) al clickear el botón de "Enviar" o preguntar "si está seguro que quiere mandar comentario?"