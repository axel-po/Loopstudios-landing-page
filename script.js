//Menu
const printMenu = () => {
  const btnBurger = document.querySelector(".menu-hamburger");
  const nav = document.querySelector(".nav-links");
  const allItems = document.querySelectorAll(".nav-links li");

  const OpenMenu = () => {
    document.querySelector(".menu-hamburger img").src =
      "/images/icon-close.svg";
  };

  const CloseMenu = () => {
    document.querySelector(".menu-hamburger img").src =
      "images/icon-hamburger.svg";
  };

  btnBurger.addEventListener("click", () => {
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
      OpenMenu();
    } else {
      CloseMenu();
    }
  });

  if (window.matchMedia("(max-width: 1300px")) {
    allItems.forEach((el) => {
      el.addEventListener("click", () => {
        nav.classList.remove("active");
        CloseMenu();
      });
    });
  }
};

printMenu();
