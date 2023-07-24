const lightIcon = document.getElementById("theme-toggle-light-icon");
const darkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleButton = document.getElementById("theme-toggle");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark").matches)
) {
  document.documentElement.classList.add("dark");
  lightIcon.classList.remove("hidden");
} else {
  document.documentElement.classList.remove("dark");
  darkIcon.classList.remove("hidden");
}

function toggleTheme() {
  lightIcon.classList.toggle("hidden");
  darkIcon.classList.toggle("hidden");

  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }
}

themeToggleButton.addEventListener("click", toggleTheme);

//Hamburger button functionality

function toggleOverlayMenu() {
  hamMenu.classList.toggle("open");
  menu.classList.toggle("hidden");
}
const hamMenu = document.getElementById("hamburger--menu");
const menu = document.getElementById("menu");
hamMenu.addEventListener("click", toggleOverlayMenu);
menu.addEventListener("click", toggleOverlayMenu);

//Adding functionality to switch different tabs

const options = document.querySelectorAll(".opt");
const tabs = document.querySelectorAll(".tabs");

options.forEach((option) => {
  option.addEventListener("click", () => {
    showBorder(option);
    showTab(option.dataset.key);
  });
});

function showBorder(option) {
  options.forEach((option) => {
    if (option.lastElementChild.classList.contains("tab-open")) {
      option.lastElementChild.classList.remove("tab-open");
    }
  });
  option.lastElementChild.classList.add("tab-open");
}
function showTab(key) {
  tabs.forEach((tab) => {
    tab.classList.add("hidden");
    if (tab.dataset.key === key) {
      tab.classList.remove("hidden");
    }
  });
}
