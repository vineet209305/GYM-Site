let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
          menu.classList.toggle('bx-x');
          navbar.classList.toggle('active');
}

window.onscroll = () => {
          menu.classList.remove('bx-x');
          navbar.classList.remove('active');
}

// typing line

const typed = new Typed('.multiple-text', {
          strings: ["Physical Fitness", "Weight Gain", "Strength Training", "Feat Lose", "Weight Lifting", "Running"],
          typeSpeed: 60,
          backSpeed: 50,
          backDelay: 1000,
          loop: true,
})