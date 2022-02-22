let togglerOpen = document.querySelector(".header-right>a:last-child");
let togglerClose = document.querySelector(".close");

togglerOpen.addEventListener('click', openMenu);

togglerClose.addEventListener('click', closeMenu);

function openMenu(){
    let element = document.querySelector(".hamburger-menu");

    element.classList.add("active");
}

function closeMenu(){
    let element= document.querySelector(".hamburger-menu");

    element.classList.remove("active");
}