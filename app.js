const buttons = document.querySelectorAll(".nav-btn");
const frame = document.getElementById("frame");

window.loadPage = function (src) {
  frame.src = src;

  buttons.forEach((b) => {
    b.classList.toggle("active", b.dataset.src === src);
  });
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    loadPage(btn.dataset.src);
  });
});
