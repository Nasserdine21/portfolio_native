let menu = document.querySelector(".burger");

let clr = document.querySelector("#bg");

let nav = document.querySelector(".menu");



menu.addEventListener('click', () => {

    

    menu.classList.toggle("menurotate");
    

    clr.classList.toggle("show");
   
    nav.classList.toggle("menu_none");
});