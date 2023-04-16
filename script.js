document.querySelector("#scroll-down").addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector("#about-me").offsetTop - 20,
  });
});

document.querySelector("#toggle-theme").addEventListener("click", () => {
  document.documentElement.classList.toggle("light-theme");
});
