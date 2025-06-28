// Animate skill bars
function animateSkillBars() {
  const skillElements = document.querySelectorAll(".skill");

  skillElements.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    const progressBar = skill.querySelector(".progress");
    const target = skill.getAttribute("data-skill");

    if (rect.top < window.innerHeight - 100) {
      progressBar.style.width = `${target}%`;
    }
  });
}

// Back to Top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  animateSkillBars();

  if (backToTop) {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

// Back to Top click
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Hide navbar on scroll down, show on scroll up
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Trigger animation on load
window.addEventListener("load", animateSkillBars);
