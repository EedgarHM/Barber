//alert('Hola');

// Lectura de elementos

const btn_burguer = document.getElementById("btn-burguer");
const container_menu = document.getElementById("container__menu"); 

btn_burguer.addEventListener("click",()=>{
    container_menu.classList.toggle("active");
    console.log("Pvto");
});

