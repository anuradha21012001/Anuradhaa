// nav bar Section

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const left_side = document.querySelector(".leftside");
const edu = document.querySelector(".containeredu");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
  left_side.classList.toggle("hidden");
  edu.classList.toggle("hidden");
};

mobile_nav.addEventListener("click", () => toggleNavbar());



// home section
var typed = new Typed('.text', {
  strings: ["Python Developer", "Throw-Ball Player", "Singer"],
  typeSpeed: 100,
  backDealy:1000,
  loop:true
});


