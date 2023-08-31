document.addEventListener("DOMContentLoaded", function () {
  var animateElement = document.querySelector(".animate-on-load");
  animateElement.classList.add("animate__animated", "animate__fadeIn");
  animateElement.style.opacity = "1";
  animateElement.style.filter = "blur(0)";
});

const AboutMe = document.getElementById("aboutMe");
const ZyjzPasja = document.getElementById("zyjzpasja");

window.onscroll = () => {
  let top = window.scrollY;

  //adboutMe animations
  let offsetA = AboutMe.offsetTop - 600;
  let heightA = AboutMe.offsetHeight;
  if (top >= offsetA && top < offsetA + heightA) {
    AboutMe.classList.add("show-animate");
  }

  //zyjzPasja animations
  let offsetZ = ZyjzPasja.offsetTop - 500;
  let heightZ = ZyjzPasja.offsetHeight;
  if (top >= offsetZ && top < offsetZ + heightZ) {
    ZyjzPasja.classList.add("show-animate");
  }
};
