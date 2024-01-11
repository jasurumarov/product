$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1,
        },
        714: {
            items: 2,
        },
        1085: {
            items: 3,
        },
    },
});

// DARK LIGHT //////////////////

let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
}); 

// BACKTOP ////////////////////
  
window.addEventListener('scroll', function () {
  toggleBacktop();
});

let backtop = document.getElementById('backtop');

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = '20px';
  } else {
    backtop.style.bottom = '-60px';
  }
}

// HEADER BURGER MENU /////////////////////////

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
    document.body.classList.toggle("menu-opened")
});

// NAVBAR SHRINK /////////////////////////////

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}