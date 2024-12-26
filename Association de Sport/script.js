



    // NAV RESPONSIVE

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const hamburgerIcon = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".close");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !mobileMenuButton.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      mobileMenu.classList.add("hidden");
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });
});