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
const hamMenu = document.getElementById("hamburger--menu");
const menu = document.getElementById("menu");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("open");
  menu.classList.toggle("hidden");
});
