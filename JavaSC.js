const slideIndices = {
  jobs: 0,
  projects: 0
};

function moveSlide(carouselKey, direction) {
  const track = document.getElementById(`${carouselKey}-track`);
  const totalSlides = track.children.length;
  
  // Calculate new index with looping boundaries
  slideIndices[carouselKey] = (slideIndices[carouselKey] + direction + totalSlides) % totalSlides;
  
  // Shift track horizontally
  const offset = slideIndices[carouselKey] * -100;
  track.style.transform = `translateX(${offset}%)`;
}

// Enable 3D flip functionality for all flip cards
document.addEventListener("DOMContentLoaded", () => {
  const flipCards = document.querySelectorAll(".card-flip");
  
  flipCards.forEach(card => {
    card.addEventListener("click", (e) => {
      // Toggle flip state when clicking the card or its flip button
      card.classList.toggle("flipped");
    });
  });
});