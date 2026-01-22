"use strict";

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select the button and the menu
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // Add click event listener to the button
  menuBtn.addEventListener("click", () => {
    // Toggle the 'hidden' and 'flex' classes
    //If hidden, show it; if shown, hide it
    mobileMenu.classList.toggle("hidden");
    // If flex, hide it; if hidden, show it
    mobileMenu.classList.toggle("flex");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    }
  });
});
