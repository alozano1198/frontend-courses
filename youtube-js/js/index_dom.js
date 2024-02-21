/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** */
import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton-scroll.js";
import { darkTheme } from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
//import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "Jun 23, 2024 03:23:19",
    "Feliz Cumpleaños amigo y docente digital 🤓"
  );
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=2SetvwBV-SU" target = "_blank" rel = "noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );

  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/8zgvz5GpWx2m7U5q7" target = "_blank" rel = "noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860711245!2d-99.16888681163248!3d19.427023124965217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2sgt!4v1687895779894!5m2!1ses-419!2sgt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  //webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

/* 
keydown = Presionar la tecla
keyup = Soltar la tecla
keypress = Mientras la presionamos
*/
d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
