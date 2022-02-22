let togglerOpen = document.querySelector(".fa-bars");
let toggleClose = document.querySelector(".close");

togglerOpen.addEventListener('click', openMenu);

toggleClose.addEventListener('click', closeMenu);

function openMenu(){
    let element = document.querySelector(".hamburger-menu");

    element.classList.add("active");
}

function closeMenu(){
    let element= document.querySelector(".hamburger-menu");

    element.classList.remove("active");
}