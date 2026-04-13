// js for mobile menu 
const menuBtnOpen = document.getElementById("menuBtn");
const menuBtnClose = document.getElementById("menuBtnClose");
//sidebar
const mobileMenu = document.getElementById("mobileMenu");
// sidebar links
const sidelinks = document.querySelectorAll('.sideLink')

function openMenu() {
    mobileMenu.classList.remove("hidden")
    menuBtnOpen.style.display = "none"
    menuBtnClose.style.display = "flex"
}

function closeMenu() {
    mobileMenu.classList.add("hidden");
    menuBtnClose.style.display = "none"
    menuBtnOpen.style.display = "flex"
}

menuBtnOpen.addEventListener("click", openMenu)
menuBtnClose.addEventListener("click", closeMenu)

sidelinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
});


// Under Development message 

const udev = document.querySelectorAll(".ud");
console.log(udev, "ud clicked")
udev.forEach((box) => {
    box.addEventListener("click", function () {
        alert("This service is currently under development and will be available soon. Thank you for your patience.");
    })
});