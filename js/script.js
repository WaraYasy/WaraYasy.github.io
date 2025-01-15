//BANNER DE ESTACIÓN

const headers = document.querySelectorAll(".estacion-fija");
const sections = document.querySelectorAll(".recetario");

window.addEventListener("scroll", () => {
  let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      headers.forEach((header) => (header.style.display = "none"));
      headers[index].style.display = "block";
    } else {
      headers[index].style.display = "none"; 
    }
  });
});

//AVISO COOKIES
document.addEventListener("DOMContentLoaded", function () {
  const avisoCookies = document.getElementById("aviso-cookies");
  const aceptarBoton = document.getElementById("aceptar-btn");
  const rechazarBoton = document.getElementById("rechazar-btn");

  // Verificar si ya se mostró el aviso de cookies en esta sesión
  if (!sessionStorage.getItem("aviso-cookies")) {
    avisoCookies.style.display = "block"; //
  }

  // Aceptar cookies
  aceptarBoton.addEventListener("click", () => {
    sessionStorage.setItem("aviso-cookies", "aceptado");
    avisoCookies.style.display = "none"; 
  });

  // Rechazar cookies
  rechazarBoton.addEventListener("click", () => {
    sessionStorage.setItem("aviso-cookies", "rechazado"); 
    avisoCookies.style.display = "none"; 

  });
});

//ASIGNAR ENLACES A LOS DIVS
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los div con la clase "file-card"
  const fileCards = document.querySelectorAll(".file-card");

  fileCards.forEach((fileCard) => {
    // Agrega el evento de clic a cada div
    fileCard.addEventListener("click", function () {
      const fileUrl = this.getAttribute("data-url");

      // Verifica si la URL está disponible antes de redirigir
      if (fileUrl) {
        window.location.href = fileUrl;
      } else {
        console.log("No se encontró una URL en data-url");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Botón blanco y negro
  const botonBN = document.getElementById('byn');
  const esModoBN = localStorage.getItem('modoBN') === 'true';

  // Aplicar el modo BN si es que está activado
  if (esModoBN) {
    document.body.classList.add('bnw');
    botonBN.innerText = 'Modo Normal'; 
  } else {
    botonBN.innerText = 'Blanco y Negro';  
  }

  // Función para alternar el modo BN
  function cambiarModoBN(event) {
    event.preventDefault();

    document.body.classList.toggle('bnw');
    const nuevoModoBN = document.body.classList.contains('bnw');
    localStorage.setItem('modoBN', nuevoModoBN);

    if (nuevoModoBN) {
      botonBN.innerText = 'Modo Normal';
    } else {
      botonBN.innerText = 'Blanco y Negro';
    }
  }

  // Asignar el evento al botón BN
  botonBN.addEventListener('click', cambiarModoBN);
});

document.addEventListener("DOMContentLoaded", function () {
  const botonFuente = document.getElementById('cambiar-fuente');
  const esFuenteAlternativa = localStorage.getItem('fuenteAlternativa') === 'true';

  // Si el modo de fuente alternativa está activado, lo aplicamos al body
  if (esFuenteAlternativa) {
    document.body.classList.add('fuente-alternativa');
    botonFuente.innerText = 'Fuente Predeterminada';  // Cambiar el texto del botón
  } else {
    botonFuente.innerText = 'Cambiar Fuente';  // Texto por defecto
  }

  // Función para alternar entre fuentes
  function cambiarFuente(event) {
    event.preventDefault();

    // Alternamos la clase .fuente-alternativa en el body
    document.body.classList.toggle('fuente-alternativa');

    // Verificar si la fuente alternativa está activada
    const nuevaFuente = document.body.classList.contains('fuente-alternativa');

    // Guardar el estado en localStorage
    localStorage.setItem('fuenteAlternativa', nuevaFuente);

    // Cambiar el texto del botón
    if (nuevaFuente) {
      botonFuente.innerText = 'Fuente Predeterminada';
    } else {
      botonFuente.innerText = 'Cambiar Fuente';
    }
  }

  // Asignar el evento al botón para cambiar la fuente
  botonFuente.addEventListener('click', cambiarFuente);
});