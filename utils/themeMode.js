let switchMode = document.getElementById("switch-mode");
let darkMode = document.getElementById("darkMode");
let lightMode = document.getElementById("lightMode");
let status;

if (localStorage.hasOwnProperty("themeMode")) {
  status = JSON.parse(localStorage.getItem("themeMode"));
} else {
  status = "dark";
}

function setMode(status) {
  status = JSON.stringify(status);
  localStorage.setItem("themeMode", status);
}

function getMode() {
  if (localStorage.hasOwnProperty("themeMode")) {
    let status = JSON.parse(localStorage.getItem("themeMode"));
    if (status === "light") {
      setLightMode();
    } else if (status === "dark") {
      setDarkMode();
    }
  }
}

let appComponents = {
  single: {
    header: document.querySelector(".header"),
    headerLogo: document.querySelector(".header-logo"),
    headerSlogan: document.querySelector(".header-slogan"),
    headerSwitchMode: document.querySelector(".header-switch-mode"),
    headerSwitchLightMode: document.querySelector(".light-mode"),
    headerSwitchDarkMode: document.querySelector(".dark-mode"),

    asideNav: document.querySelector(".aside-nav"),
    asideNavExpand: document.querySelector(".nav-expand"),
    asideTitle: document.querySelector(".aside-title"),
    // asideMenuNav: document.querySelector(".menu-nav"),
    // asideNavHome: document.querySelector(".home"),

    bannerTitle: document.querySelector(".banner-title"),
    bannerDescription: document.querySelector(".banner-description"),

    // dashboard: document.querySelector(".dashboard"),
    dashboardManager: document.querySelector(".dashboard-manager"),
    // dashboardForm: document.querySelector(".dashboard-form"),
    dashboardTitle: document.querySelector(".dashboard-title"),
    dashboardData: document.querySelector(".dashboard-data"),
    dashboardDataTable: document.querySelector(".dashboard-table"),
    dashboardDataThead: document.querySelector(".dashboard-thead"),
    dashboardDataTbody: document.querySelector(".dashboard-tbody"),

    footer: document.querySelector(".footer"),
    footerDevTeam: document.querySelector(".footer-developer-team"),
    footerDevName: document.querySelector(".dev-name"),
  },
  many: {
    // asideNavUl: document.querySelectorAll(".nav"), // all
    // asideNavItem: document.querySelectorAll(".nav-item"), // all
    asideNavIcon: document.querySelectorAll(".nav-icon"), // all
    asideNavLink: document.querySelectorAll(".nav-item-link"), // all
    asideNavType: document.querySelectorAll(".nav-item-type"), // all

    dashboardTwoFields: document.querySelectorAll(".dashboard-two-fields"), // all
    dashboardField: document.querySelectorAll(".dashboard-field"), // all
    dashboardFieldLabel: document.querySelectorAll(".dashboard-field-label"), // all
    dashboardFieldInput: document.querySelectorAll(".dashboard-field-input"), // all
    dashboardFieldSelect: document.querySelectorAll(".dashboard-field-select "),
    dashboardDataRow: document.querySelectorAll("tbody .dashboard-row"), // all
    dashboardDataTd: document.querySelectorAll(".dashboard-tbody td"), //all
    dashboardDataButton: document.querySelectorAll(".dashboard-table-button"), // all

    footerDevMediaIcon: document.querySelectorAll(".dev-social-media-icon"), // all
    footerCredits: document.querySelectorAll(".footer-credits"), // all
    footerCreditsLink: document.querySelectorAll(".footer-credits-link"), // all
  },
};

setLightMode();
getMode();
function toggleMode() {
  if (status == "light") {
    setDarkMode();
    setMode("dark");
    status = "dark";
  } else if (status == "dark") {
    setLightMode();
    setMode("light");
    status = "light";
  }
}

function setDarkMode() {
  darkMode.style.display = "inline-block";
  darkMode.style.marginLeft = "24px";
  lightMode.style.display = "none";

  let single = appComponents.single;
  let many = appComponents.many;
  single.header.style.backgroundColor = "#0a2463";
  single.headerLogo.style.fill = "#fffaff";
  single.headerSlogan.style.color = "#fffaff";
  single.headerSwitchMode.style.backgroundColor = "#1e1b18";
  single.headerSwitchLightMode.style.fill = "#d8315b";
  single.headerSwitchDarkMode.style.fill = "#d8315b";

  single.asideNav.style.backgroundColor = "#1e1b18";
  single.asideNavExpand.style.backgroundColor = "#d8315b";
  single.asideNavExpand.style.fill = "#1e1b18";
  single.asideTitle.style.color = "#d8315b";

  single.bannerDescription.style.backgroundColor = "#d8315b";

  single.footer.style.backgroundColor = "#0a2463";
  single.footerDevTeam.style.color = "#fffaff";
  single.footerDevName.style.color = "#d8315b";

  many.asideNavIcon.forEach((icon) => (icon.style.fill = "#d8315b"));
  many.asideNavLink.forEach((link) => (link.style.color = "#d8315b"));

  many.footerDevMediaIcon.forEach((icon) => (icon.style.fill = "#d8315b"));
  many.footerCredits.forEach((credits) => (credits.style.color = "#fffaff"));
  many.footerCreditsLink.forEach((link) => (link.style.color = "#d8315b"));
}

function setLightMode() {
  darkMode.style.display = "none";
  lightMode.style.display = "inline-block";

  let single = appComponents.single;
  let many = appComponents.many;
  single.header.style.backgroundColor = "#fffaff";
  single.headerLogo.style.fill = "#0a2463";
  single.headerSlogan.style.color = "#0a2463";
  single.headerSwitchMode.style.backgroundColor = "#0a2463";
  single.headerSwitchLightMode.style.fill = "#3e92cc";
  single.headerSwitchDarkMode.style.fill = "#3e92cc";

  single.asideNav.style.backgroundColor = "#3e92cc";
  single.asideNavExpand.style.backgroundColor = "#1e1b18";
  single.asideNavExpand.style.fill = "#fffaff";
  single.asideTitle.style.color = "#0a2463";

  single.bannerDescription.style.backgroundColor = "#0a2463";

  single.footer.style.backgroundColor = "#cecece";
  single.footerDevTeam.style.color = "#3e92cc";
  single.footerDevName.style.color = "#0a2463";

  many.asideNavIcon.forEach((icon) => (icon.style.fill = "#0a2463"));
  many.asideNavLink.forEach((link) => (link.style.color = "#0a2463"));

  many.footerDevMediaIcon.forEach((icon) => (icon.style.fill = "#0a2463"));
  many.footerCredits.forEach((credits) => (credits.style.color = "#0a2463"));
  many.footerCreditsLink.forEach((link) => (link.style.color = "#3e92cc"));
}

switchMode.addEventListener("click", toggleMode);
