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
      headers[index].style.display = "none"; // Oculta cuando no es la sección activa
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
    avisoCookies.style.display = "block"; // Muestra el aviso de cookies
  }

  // Aceptar cookies
  aceptarBoton.addEventListener("click", () => {
    sessionStorage.setItem("aviso-cookies", "aceptado"); // Guardar aceptación en la sesión
    avisoCookies.style.display = "none"; // Ocultar el aviso de cookies
    // Aquí puedes agregar lógica adicional para habilitar cookies si fuera necesario
  });

  // Rechazar cookies
  rechazarBoton.addEventListener("click", () => {
    sessionStorage.setItem("aviso-cookies", "rechazado"); // Guardar rechazo en la sesión
    avisoCookies.style.display = "none"; // Ocultar el aviso de cookies
    // Aquí puedes agregar lógica adicional para deshabilitar cookies si fuera necesario
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
