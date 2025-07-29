document.addEventListener("DOMContentLoaded", function () {
  // Get all toggle buttons
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  // Add click event listener to each toggle button
  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Get the parent card
      const card = this.closest(".card");

      // Toggle the expanded class
      card.classList.toggle("expanded");

      // Update button text
      if (card.classList.contains("expanded")) {
        this.textContent = "−";
        this.setAttribute("aria-label", "Collapse content");
      } else {
        this.textContent = "+";
        this.setAttribute("aria-label", "Expand content");
      }
    });
  });

  // Optional: Close other cards when one is opened (accordion behavior)
  // Uncomment the code below if you want accordion behavior
  /*
    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const currentCard = this.closest('.card');
            const allCards = document.querySelectorAll('.card');
            
            // Close all other cards
            allCards.forEach(function(card) {
                if (card !== currentCard && card.classList.contains('expanded')) {
                    card.classList.remove('expanded');
                    const otherButton = card.querySelector('.toggle-btn');
                    otherButton.textContent = '+';
                    otherButton.setAttribute('aria-label', 'Expand content');
                }
            });
            
            // Toggle current card
            currentCard.classList.toggle('expanded');
            
            // Update button text
            if (currentCard.classList.contains('expanded')) {
                this.textContent = '−';
                this.setAttribute('aria-label', 'Collapse content');
            } else {
                this.textContent = '+';
                this.setAttribute('aria-label', 'Expand content');
            }
        });
    });
    */
});

// Optional: Smooth scrolling for better UX
function smoothScrollToCard(cardElement) {
  cardElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Optional: Keyboard accessibility
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.key === " ") {
    if (e.target.classList.contains("toggle-btn")) {
      e.preventDefault();
      e.target.click();
    }
  }
});
