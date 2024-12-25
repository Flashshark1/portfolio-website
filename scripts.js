const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("header nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const scrollToTopBtn = document.getElementById("scrollToTop");

// Show the button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
});

// Scroll back to the top
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
