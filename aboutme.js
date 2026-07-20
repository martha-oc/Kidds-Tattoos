const button = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

button.addEventListener("click", () => {
    nav.classList.toggle("active");
});

button.textContent = nav.classList.contains("active")
    ? "✕ Close"
    : "☰ Menu";