
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      menuBtn.textContent = mobileMenu.classList.contains("hidden")
        ? "☰"
        : "✕";
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuBtn.textContent = "☰";
      });
    });
  }

  // Copyright year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
