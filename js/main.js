addEventListener('DOMContentLoaded',()=>{
    const btn_burger = document.getElementById("menu__btn__burger");
    

    btn_burger.addEventListener("click",()=>{
        const menu_items = document.getElementById("menu__items");
        const container_main = document.getElementById("container__main");
        menu_items.classList.toggle("show");
        container_main.classList.toggle("show");
    })

})