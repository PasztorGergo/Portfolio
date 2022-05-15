window.onload = () => {
  anime({
    targets: ["h2", "h3"],
    color: "#929292",
    easing: "cubicBezier(.5, .05, .1, .3)",
    delay: "500ms",
  });
  anime({
    targets: document.querySelectorAll(".hr"),
    width: "100%",
    easing: "easeInQuart",
    delay: anime.stagger(500, { start: 250 }),
  });
};

const themeToggler = document.querySelector(".theme-toggler");
const themeIcon = themeToggler.children[0];

themeToggler.addEventListener("click", () => {
  localStorage.setItem(
    "theme",
    document.documentElement.classList.contains("dark") ? "light" : "dark"
  );
  document.documentElement.classList.contains("dark")
    ? document.documentElement.classList.replace("dark", "light")
    : document.documentElement.classList.replace("light", "dark");
  localStorage.getItem("theme") === "dark"
    ? themeIcon.classList.replace("fa-moon", "fa-sun")
    : themeIcon.classList.replace("fa-sun", "fa-moon");
});
if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
