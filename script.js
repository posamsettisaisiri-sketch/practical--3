const categoryButtons = document.querySelectorAll(".category-btn");
const restaurantCards = document.querySelectorAll(".restaurant-card");
const message = document.getElementById("message");

// Restaurant category filtering

categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const category = button.dataset.category;

        categoryButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        restaurantCards.forEach(function(card) {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.hidden = false;
            } else {
                card.hidden = true;
            }

        });
    });
});

// Order button functionality

const orderButtons = document.querySelectorAll(
    ".restaurant-card .order-btn"
);

orderButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const restaurant = button.dataset.restaurant;

        message.textContent =
            "You selected " + restaurant +
            ". Your food order can be placed here.";

    });
});

// Select All category by default

document.querySelector('[data-category="all"]').click();