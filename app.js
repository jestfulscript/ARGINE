const buttons = document.querySelectorAll(".nav-btn");
const frame = document.getElementById("frame");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const src = btn.dataset.src;
    frame.src = src;

    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});