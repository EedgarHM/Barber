addEventListener("DOMContentLoaded", () => {
  const btn_burger = document.getElementById("menu__btn__burger");
  const btnLogin = document.getElementById("btnLogin");

  btn_burger.addEventListener("click", () => {
    const menu_items = document.getElementById("menu__items");
    const container_main = document.getElementById("container__main");
    menu_items.classList.toggle("show");
    container_main.classList.toggle("show");
  });

  // Cargando contenido con ajax
  $(document).ready(() => {
    //Click en agendar cita
    /*
    $("#ubicacion").click(() => {
      $("#container").load("../components/Citas.php");
    });

    $("#nosotros").click(() => {
      $("#container").load("../components/Nosotros.php");
    });
    */

    $("#btnLogin").click(() => {
      $("#container").load("../components/Login.php");
    });

    // Cuando se de click en Ubicacion
    $("#ubicacion").click(() => {
      $("#container").load("../components/Ubicacion.php");
    });
  });
});
