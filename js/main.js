addEventListener("DOMContentLoaded", () => {
  const btn_burger = document.getElementById("menu__btn__burger");
  const btnLogin = document.getElementById("btnLogin");
  const btnCitas = document.getElementById("citas");
  const nosotros = document.getElementById("nosotros");
  const btnCiubicaciontas = document.getElementById("ubicacion");
  const menu_items = document.getElementById("menu__items");
  const container_main = document.getElementById("container__main");


  btn_burger.addEventListener("click", () => {
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
      getClassMenu();
      $("#container").load("../components/Login.php");
    });

    // Cuando se de click en Ubicacion
    $("#ubicacion").click(() => {
      getClassMenu();
      $("#container").load("../components/Ubicacion.php");
    });
  });

  const getClassMenu = () =>{
    if( menu_items.classList.contains("show")){
      menu_items.classList.toggle("show");
      container_main.classList.toggle("show");
    }
  }

});
