const navBtn = document.querySelector(".navbar__ham-button");
const navSelectors = document.querySelector(".navbar__ham-menu");
const toggleBtn = document.getElementById("darkmode-toggle");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
});

navSelectors.addEventListener("click", () => {
  navBtn.classList.toggle("active");
});

toggleBtn.addEventListener("change", () => {
  document.body.classList.toggle("light");
});

function reveal() {
  var reveals = document.querySelectorAll("section");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
