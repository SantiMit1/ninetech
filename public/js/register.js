window.addEventListener("load", function() {
    //nombre y apellido
    let campoNombre = document.querySelector("#nombre")
    let campoApellido = document.querySelector("#apellido")
    function nombreValido() {
        let nombreFeedback = document.querySelector("#nombreFeedback")

        if(campoNombre.value.length < 2) {
            nombreFeedback.innerHTML = "El nombre debe tener al menos 2 caracteres"
            nombreFeedback.classList.remove("is-valid")
            nombreFeedback.classList.add("is-invalid")
            return false;
        } else {
            nombreFeedback.innerHTML = "El nombre debe tener al menos 2 caracteres"
            nombreFeedback.classList.remove("is-invalid")
            nombreFeedback.classList.add("is-valid")
            return true;
        }
        
    }

    function apellidoValido() {
        let apellidoFeedback = document.querySelector("#apellidoFeedback")

        if(campoApellido.value.length < 2) {
            apellidoFeedback.innerHTML = "El apellido debe tener al menos 2 caracteres"
            apellidoFeedback.classList.remove("is-valid")
            apellidoFeedback.classList.add("is-invalid")
            return false;
        } else {
            apellidoFeedback.innerHTML = "El apellido debe tener al menos 2 caracteres"
            apellidoFeedback.classList.remove("is-invalid")
            apellidoFeedback.classList.add("is-valid")
            return true;
        }
        
    }

    campoNombre.addEventListener("input", function() {
        nombreValido()
    })
    campoApellido.addEventListener("input", function() {
        apellidoValido()
    })

    //email
    let campoEmail = document.querySelector("#email")
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    function emailValido() {
        let emailFeedback = document.querySelector("#emailFeedback")
        if(!emailRegex.test(campoEmail.value)) {
            emailFeedback.innerHTML = "Inserte un email valido"
            emailFeedback.classList.add("is-invalid")
            emailFeedback.classList.remove("is-valid")
            return false;
        } else {
            emailFeedback.innerHTML = "Inserte un email valido"
            emailFeedback.classList.remove("is-invalid")
            emailFeedback.classList.add("is-valid")
            return true;
        }
    }
    
    campoEmail.addEventListener("input", function() {
        emailValido()
    })

    //domicilio
    let campoLocalidad = document.querySelector("#localidad")

    function localidadValida() {
        let localidadFeedback = document.querySelector("#localidadFeedback")
        if(campoLocalidad.value.length < 1) {
            localidadFeedback.innerHTML = "Este campo no puede estar vacio"
            localidadFeedback.classList.remove("is-valid")
            localidadFeedback.classList.add("is-invalid")
            return false;
        } else {
            localidadFeedback.innerHTML = "Este campo no puede estar vacio"
            localidadFeedback.classList.remove("is-invalid")
            localidadFeedback.classList.add("is-valid")
            return true;
        }
    }

    campoLocalidad.addEventListener("input", function() {
        localidadValida()
    })

    let campoNumero = document.querySelector("#numero")

    function numeroValido() {
        let numeroFeedback = document.querySelector("#numeroFeedback")
        if(campoNumero.value.length < 1) {
            numeroFeedback.innerHTML = "Este campo no puede estar vacio"
            numeroFeedback.classList.remove("is-valid")
            numeroFeedback.classList.add("is-invalid")
            return false;
        } else {
            numeroFeedback.innerHTML = "Este campo no puede estar vacio"
            numeroFeedback.classList.remove("is-invalid")
            numeroFeedback.classList.add("is-valid")
            return true;
        }
    }

    campoNumero.addEventListener("input", function() {
        numeroValido()
    })

    let campoDireccion = document.querySelector("#direccion")

    function direccionValida() {
        let direccionFeedback = document.querySelector("#direccionFeedback")
        if(campoDireccion.value.length < 1) {
            direccionFeedback.innerHTML = "Este campo no puede estar vacio"
            direccionFeedback.classList.remove("is-valid")
            direccionFeedback.classList.add("is-invalid")
            return false;
        } else {
            direccionFeedback.innerHTML = "Este campo no puede estar vacio"
            direccionFeedback.classList.remove("is-invalid")
            direccionFeedback.classList.add("is-valid")
            return true;
        }
    }

    campoDireccion.addEventListener("input", function() {
        direccionValida()
    })

    //contrase??a
    let campoContrase??a = document.querySelector("#password")

    function contrase??aValida() {
        let contrase??aFeedback = document.querySelector("#passwordFeedback")
        if(campoContrase??a.value.length < 8) {
            contrase??aFeedback.innerHTML = "La contrase??a debe contener al menos 8 caracteres"
            contrase??aFeedback.classList.remove("is-valid")
            contrase??aFeedback.classList.add("is-invalid")
            return false;
        } else {
            contrase??aFeedback.innerHTML = "La contrase??a debe contener al menos 8 caracteres"
            contrase??aFeedback.classList.remove("is-invalid")
            contrase??aFeedback.classList.add("is-valid")
            return true;
        }
    }

    campoContrase??a.addEventListener("input", function() {
        contrase??aValida()
    })

    let campoRecontrase??a = document.querySelector("#repassword")

    function recontrase??aValida() {
        let recontrase??aFeedback = document.querySelector("#repasswordFeedback")
        if(campoRecontrase??a.value != campoContrase??a.value) {
            recontrase??aFeedback.innerHTML = "Las contrase??as no coinciden"
            recontrase??aFeedback.classList.add("is-invalid")
            return false;
        } else {
            recontrase??aFeedback.innerHTML = ""
            recontrase??aFeedback.classList.remove("is-invalid")
            return true;
        }
    }
    
    campoRecontrase??a.addEventListener("input", function() {
        recontrase??aValida()
    })

    //imagen
    let profilePic = document.querySelector("#profilePic")
    function imagenValida() {
        let imagenFeedback = document.querySelector("#imagenFeedback")
        let extensionesValidas = ["jpg", "jpeg", "png", "gif"]
        if (!profilePic.value) {
            imagenFeedback.innerHTML = ""
            imagenFeedback.classList.remove("is-invalid")
            return true;
        }

        let extension = profilePic.value.split(".").pop()
        if (extensionesValidas.indexOf(extension) != -1) {
            imagenFeedback.innerHTML = ""
            imagenFeedback.classList.remove("is-invalid")
            return true;
        } else {
            imagenFeedback.innerHTML = "Archivo invalido, las extensiones permitidas son: " + extensionesValidas.join(", ")
            imagenFeedback.classList.add("is-invalid")
            return false;
        }
    }

    profilePic.addEventListener("change", function() {
        imagenValida()
    })

    //envio de formulario
    let formulario = document.querySelector("form")
    formulario.addEventListener("submit", function(e) {
        e.preventDefault()
        if(nombreValido() &&
        apellidoValido() &&
        emailValido() &&
        localidadValida() &&
        direccionValida() &&
        numeroValido() &&
        contrase??aValida() &&
        recontrase??aValida() && 
        imagenValida()) {
            formulario.submit()
        }
    })
})
