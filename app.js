window.onload = () => {
  anime({
    targets: "h2",
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
