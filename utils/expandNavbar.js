let expander = document.getElementById("navExpander");
let state = "close";

let nav = document.getElementById("navBar");
let navTitle = document.getElementById("asideTitle");
let navItem = document.querySelectorAll(".nav-item");
let itensNav = document.querySelectorAll(".nav-item p");

function expanderNavigation() {
  if (state == "close") {
    nav.style.width = "15rem";

    navTitle.innerHTML = "DASHBOARD";
    navItem.forEach((item) => {
      item.style.justifyContent = "flex-start";
    });

    expander.style.left = "14rem";
    expander.style.transform = "rotate(180deg)";

    itensNav.forEach((item) => {
      item.style.display = "block";
    });

    state = "open";
  } else if (state == "open") {
    nav.style.width = "5rem";

    navTitle.innerHTML = "";
    navItem.forEach((item) => {
      item.style.justifyContent = "center";
    });

    expander.style.left = "4rem";
    expander.style.transform = "rotate(0deg)";

    itensNav.forEach((item) => (item.style.display = "none"));

    state = "close";
  }
}

expander.addEventListener("click", expanderNavigation);
