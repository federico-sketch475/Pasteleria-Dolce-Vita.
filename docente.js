/* ==================================================
   ACCESO AL ÁREA DOCENTE
   ================================================== */


function entrarDocente() {


    const password =
        document.getElementById("password").value;


    const error =
        document.getElementById("error");


    const login =
        document.getElementById("login");


    const contenido =
        document.getElementById("contenidoDocente");


    const contraseñaCorrecta =
        "DolceVita2026";


    if (password === contraseñaCorrecta) {


        login.style.display = "none";


        contenido.style.display = "block";


    } else {


        error.textContent =
            "❌ Contraseña incorrecta.";


    }

}
