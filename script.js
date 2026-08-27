/* ==================================================
   DOLCE VITA - JAVASCRIPT
   ================================================== */


/* ================= IDIOMA ================= */

let idiomaActual = "es";


function cambiarIdioma() {

    const textosEspanol =
        document.querySelectorAll(".es");

    const textosItaliano =
        document.querySelectorAll(".it");

    const boton =
        document.getElementById("idiomaBtn");


    if (idiomaActual === "es") {


        textosEspanol.forEach(function(elemento) {

            elemento.style.display = "none";

        });


        textosItaliano.forEach(function(elemento) {

            elemento.style.display = "";

        });


        boton.innerHTML = "🇪🇸 Español";


        idiomaActual = "it";


        document.documentElement.lang = "it";


    } else {


        textosItaliano.forEach(function(elemento) {

            elemento.style.display = "none";

        });


        textosEspanol.forEach(function(elemento) {

            elemento.style.display = "";

        });


        boton.innerHTML = "🇮🇹 Italiano";


        idiomaActual = "es";


        document.documentElement.lang = "es";

    }

}


/* ================= SELECCIONAR TORTA ================= */

function seleccionarTorta(torta) {

    const mensaje =
        document.getElementById("mensaje");


    if (mensaje) {


        if (idiomaActual === "es") {

            mensaje.value =
                "Hola, quiero consultar por la " +
                torta +
                ". Me gustaría recibir información sobre disponibilidad, tamaños, precios y opciones de decoración.";

        } else {

            mensaje.value =
                "Ciao, vorrei avere informazioni sulla " +
                torta +
                ". Mi piacerebbe conoscere disponibilità, dimensioni, prezzi e opzioni di decorazione.";

        }


        mensaje.focus();

    }

}


/* ================= FORMULARIO ================= */

const formulario =
    document.getElementById("contactForm");


if (formulario) {


    formulario.addEventListener(
        "submit",
        function(event) {


            event.preventDefault();


            if (idiomaActual === "es") {

                alert(
                    "¡Gracias por contactarte con Dolce Vita! 🍰\n\n" +
                    "Tu consulta fue recibida correctamente."
                );

            } else {

                alert(
                    "Grazie per aver contattato Dolce Vita! 🍰\n\n" +
                    "La tua richiesta è stata ricevuta correttamente."
                );

            }


            formulario.reset();

        }
    );

}


/* ================= MENÚ ACTIVO ================= */

const enlacesMenu =
    document.querySelectorAll(".menu a[href^='#']");


const secciones =
    document.querySelectorAll("main section[id]");


function actualizarMenu() {


    let seccionActual = "";


    secciones.forEach(function(seccion) {


        const posicion =
            seccion.getBoundingClientRect().top;


        if (posicion <= 160) {

            seccionActual =
                seccion.getAttribute("id");

        }

    });


    enlacesMenu.forEach(function(enlace) {


        enlace.classList.remove("active");


        const destino =
            enlace.getAttribute("href");


        if (
            destino === "#" + seccionActual ||
            (
                seccionActual === "inicio-seccion" &&
                destino === "#inicio"
            )
        ) {

            enlace.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    actualizarMenu
);


actualizarMenu();


/* ================= HEADER ================= */

window.addEventListener(
    "scroll",
    function() {


        const header =
            document.querySelector("header");


        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 7px 25px rgba(60, 35, 20, 0.15)";

        } else {

            header.style.boxShadow =
                "0 3px 15px rgba(70, 40, 25, 0.08)";

        }

    }
);
