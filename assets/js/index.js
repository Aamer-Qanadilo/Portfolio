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

// const box = document.querySelector(".header-bg");

const layer = document.getElementById("header");

const headerContent = document.querySelector(".header__content");
const headerImage = document.querySelector(".header__img");

layer.addEventListener("mousemove", function (e) {
  let fastValueX = (e.pageX * -1) / 10;
  let fastValueY = (e.pageY * -1) / 10;
  let slowValueX = (e.pageX * -1) / 30;
  let slowValueY = (e.pageY * -1) / 30;

  headerContent.style.transform =
    "translate3d(" + fastValueX + "px," + fastValueY + "px, 0)";

  headerImage.style.transform =
    "translate3d(" + slowValueX + "px," + slowValueY + "px, 0)";

  // Array.from(box.children).forEach((child, index) => {
  //   fastValueX = (e.pageX * -1) / (10 - index);
  //   fastValueY = (e.pageY * -1) / (10 + index);
  //   slowValueX = (e.pageX * -1) / (30 - index);
  //   slowValueY = (e.pageY * -1) / (30 + index);

  //   child.style.transform =
  //     "translate3d(" + fastValueX + "px," + fastValueY + "px, 0)";
  // });
});

window.addEventListener("scroll", reveal);

// window.onload = () => {
//   Array.from(box.children).forEach((child, index) => {
//     child.style.left = `${(index + 1) * 50}px`;
//   });
// };
