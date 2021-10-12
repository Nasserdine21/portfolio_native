let menu = document.querySelector(".burger");

let clr = document.querySelector("#bg");

let nav = document.querySelector(".menu");

let scr = document.getElementById("scrol");

let fox = document.querySelector(".fox");

let navscroll = document.querySelector(".cv");

let profil = document.querySelector("#prfl");

let frm = document.querySelector("#frm");

let cmpt = document.querySelector("#cmpt");

let cnt = document.querySelector("#cnt");







menu.addEventListener('click', () => {

    

    menu.classList.toggle("menurotate");
    

    clr.classList.toggle("show");
   
    nav.classList.toggle("menu_none");



});



window.addEventListener('scroll', function() {

    let windowpos = window.scrollY > 0;

    

    

    scr.classList.toggle('scroll-active', windowpos);

    fox.classList.toggle("scroll-avatar", windowpos);

    navscroll.classList.toggle("scroll-list", windowpos);

    profil.classList.toggle("scroll-option", windowpos);

    frm.classList.toggle("scroll-option", windowpos);

    cmpt.classList.toggle("scroll-option", windowpos);

    cnt.classList.toggle("scroll-option", windowpos);
    

    
   

});

var app = document.querySelector('#name');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString('HI IM NASSERDINE <span style="color: #0060f1;">EL AATTARI</span>')
  .pauseFor(500)
  .deleteChars(29)
  .typeString('IM <strong>FULL STACK WEB <span style="color: #0060f1;">DEVELOPER</span></strong>')
  .pauseFor(500)
  .deleteChars(29)
  .typeString('<strong>SCROLL DOWN TO DISCOVER MY <span style="color: #0060f1;">PORTFOLIO</span></strong>')
  .pauseFor(1000)
  .start();

  