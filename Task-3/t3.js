// Description: A simple image slider with next and previous buttons, and auto-slide functionality.
    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    let current = 0;

    function updateSlide() {
      const slidesContainer = document.querySelector(".slides");
      slidesContainer.style.transform = `translateX(-${current * 100}%)`;
    }

    next.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      updateSlide();
    });

    prev.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      updateSlide();
    });

    // Optional auto-slide
    setInterval(() => {
      current = (current + 1) % slides.length;
      updateSlide();
    }, 3000);

    // Fetch Joke from API
async function fetchJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  });
  const data = await res.json();
  document.getElementById("joke-text").innerText = data.joke;
}

// Load initial joke
window.onload = fetchJoke;