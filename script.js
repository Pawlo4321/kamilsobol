document.addEventListener("DOMContentLoaded", function () {
  var animateElement = document.querySelector(".animate-on-load");
  animateElement.classList.add("animate__animated", "animate__fadeIn");
  animateElement.style.opacity = "1";
});

const AboutMe = document.getElementById("aboutMe");

window.onscroll = () => {
  let top = window.scrollY;
  let offset = AboutMe.offsetTop - 400;
  let height = AboutMe.offsetHeight;
  if (top >= offset && top < offset + height) {
    AboutMe.classList.add("show-animate");
  }
};
