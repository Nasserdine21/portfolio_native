let menu = document.querySelector(".burger");



menu.addEventListener('click', () => {

    

    menu.classList.toggle("menurotate");
    document.getElementById("bg").style.width = "300px";
    document.querySelector(".menu").style.backgroundColor = "white";
});