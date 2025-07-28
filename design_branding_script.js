document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    
    cards.forEach((card) => {
        const button = card.querySelector(".toggle-btn");
        const cardNum = card.querySelector(".card-num");
        const cardHeading = card.querySelector(".card-heading");
        const cardContent = card.querySelector(".card-content-para");

        button.addEventListener("click", function () {
            // Close any already expanded card
            cards.forEach((c) => {
                if (c !== card) {
                    c.classList.remove("expanded");
                    c.querySelector(".toggle-btn").textContent = "+";

                    // Reset position of card-num and card-heading
                    c.querySelector(".card-num").style.top = "";
                    c.querySelector(".card-heading").style.top = "";
                    c.querySelector(".card-num").style.fontSize = "";
                }
            });

            // Toggle the clicked card
            const isExpanded = card.classList.contains("expanded");
            card.classList.toggle("expanded", !isExpanded);
            button.textContent = isExpanded ? "+" : "−"; 

            // Adjust card-num and card-heading position when expanded
            if (!isExpanded) {
                cardNum.style.top = "30%";
                cardNum.style.fontSize = "18rem";
                cardHeading.style.top = "-15%";
            } else {
                cardNum.style.top = "";  // Reset
                cardHeading.style.top= "";  // Reset
                cardNum.style.fontSize = ""; //Reset
            }
        });
    });
});
