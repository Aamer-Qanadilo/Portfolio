const openNav = () => {
  const navbar = document.createElement("div");
  navbar.classList.add(
    "navbar-mobile-screen",
    "position-fixed",
    "w-100",
    "h-100",
    "top-0",
    "start-0",
    "d-flex",
    "flex-column",
    "justify-content-between",
    "pb-5",
  );
  navbar.style.backgroundColor = "hsla(229, 31%, 21%, 90%)";
  navbar.style.zIndex = "99";
  navbar.onclick = closeNav;
  navbar.innerHTML = `
        <div class="d-flex justify-content-end w-100 p-4">
            <div><img src="./assets/img/icon-close.svg" class="close-nav-icon" alt="" onclick="closeNav()"></div>
        </div>
        <div class="mobile-nav-buttons d-flex flex-column align-items-center justify-content-center">
          <a href="#home" class="text-decoration-none text-white w-75 p-4 text-center">Home</a>
          <a href="#about" class="text-decoration-none text-white w-75 p-4 border-top text-center">About</a>
          <a href="#projects" class="text-decoration-none text-white w-75 p-4 border-top text-center">My Projects</a>
        </div>
        <div class="platforms-icons d-flex justify-content-center gap-5">
          <img src="./assets/img/icon-facebook.svg" alt="">
          <img src="./assets/img/icon-twitter.svg" alt="">
        </div>
    `;
  document.body.insertBefore(navbar, document.body.firstChild);
};

document.querySelector(".nav-bars-button").addEventListener("click", () => {
  openNav();
});

const closeNav = () => {
  document.body.removeChild(document.body.firstChild);
};
