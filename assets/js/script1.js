var boton = document.getElementById("botton");

boton.addEventListener('click', function () {
   event.preventDefault()
    let nombre = document.querySelector("#nombre").value;
    let asunto = document.querySelector("#asunto").value;
    let mensaje = document.querySelector("#mensaje").value;

    let metrica = /[a-zA-Z]+/
    let metrica2= /[a-zA-Z]+/
    let metrica3= /^[a-zA-Z\s]+$/

      if (metrica.test(nombre) && metrica2.test(asunto) && metrica3.test(mensaje)) {
          document.querySelector(".resultado").innerHTML = "Mensaje enviado con exito";


    } else {
        document.querySelector(".errorNombre").innerHTML = "El mensaje es requerido";
        document.querySelector(".errorAsunto").innerHTML = "El mensaje es requerido";
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido";
     

    }
})