// const openNav = () => {
//   const navbar = document.createElement("div");
//   navbar.classList.add(
//     "navbar-mobile-screen",
//     "position-fixed",
//     "w-100",
//     "h-100",
//     "top-0",
//     "start-0",
//     "d-flex",
//     "flex-column",
//     "justify-content-between",
//     "pb-5",
//   );
//   navbar.style.backgroundColor = "hsla(229, 31%, 21%, 90%)";
//   navbar.style.zIndex = "99";
//   navbar.onclick = closeNav;
//   navbar.innerHTML = `
//         <div class="d-flex justify-content-end w-100 p-4">
//             <div><img src="./assets/img/icon-close.svg" class="close-nav-icon" alt="" onclick="closeNav()"></div>
//         </div>
//         <div class="mobile-nav-buttons d-flex flex-column align-items-center justify-content-center">
//           <a href="#home" class="text-decoration-none text-white w-75 p-4 text-center">Home</a>
//           <a href="#about" class="text-decoration-none text-white w-75 p-4 border-top text-center">About</a>
//           <a href="#projects" class="text-decoration-none text-white w-75 p-4 border-top text-center">My Projects</a>
//           <a href="#contact" class="text-decoration-none text-white w-75 p-4 border-top text-center">Contact</a>
//         </div>
//         <div class="platforms-icons d-flex justify-content-center gap-5">
//           <img src="./assets/img/icon-facebook.svg" alt="">
//           <img src="./assets/img/icon-twitter.svg" alt="">
//         </div>
//     `;
//   document.body.insertBefore(navbar, document.body.firstChild);
// };

// const closeNav = () => {
//   document.body.removeChild(document.body.firstChild);
// };

const navBtn = document.querySelector(".nav-bars-button");
const navSelectors = document.querySelector(".navbar-selectors");
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
      // reveals[i].removeAttribute("style");
      // reveals[i].style.visibility = "visible";
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");

      // reveals[i].style.visibility = "hidden";
    }
  }
}

const box = document.querySelector(".header-bg");

const layer = document.getElementById("home");

const headerContent = document.querySelector(".header-content");
const headerImage = document.querySelector(".header-img");

layer.addEventListener("mousemove", function (e) {
  let fastValueX = (e.pageX * -1) / 10;
  let fastValueY = (e.pageY * -1) / 10;
  let slowValueX = (e.pageX * -1) / 30;
  let slowValueY = (e.pageY * -1) / 30;

  headerContent.style.transform =
    "translate3d(" + fastValueX + "px," + fastValueY + "px, 0)";

  headerImage.style.transform =
    "translate3d(" + slowValueX + "px," + slowValueY + "px, 0)";

  Array.from(box.children).forEach((child, index) => {
    fastValueX = (e.pageX * -1) / (10 - index);
    fastValueY = (e.pageY * -1) / (10 + index);
    slowValueX = (e.pageX * -1) / (30 - index);
    slowValueY = (e.pageY * -1) / (30 + index);

    // if (index / 2 === 0) {
    //   child.style.transform =
    //     "translate3d(" + slowValueX + "px," + slowValueY + "px, 0)";
    // } else {
    // }
    child.style.transform =
      "translate3d(" + fastValueX + "px," + fastValueY + "px, 0)";
  });
});

window.addEventListener("scroll", reveal);

window.onload = () => {
  Array.from(box.children).forEach((child, index) => {
    child.style.left = `${(index + 1) * 50}px`;
  });
};
