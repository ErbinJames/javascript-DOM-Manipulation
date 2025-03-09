const characterItems = document.querySelectorAll(".character-item");
const characterNameElement = document.querySelector(".character-name");
const rightPanel = document.querySelector(".right-panel");
const characterTitle = document.getElementById("character-title");
const characterDescription = document.getElementById("character-description");
const characterImage = document.getElementById("selected-character-img");

// Character descriptions 
const characterDescriptions = {
    "mario": "Mario, the legendary plumber and hero of the Mushroom Kingdom!",
    "luigi": "Luigi, Mario’s younger brother, is always up for a race!",
    "peach": "Princess Peach, ruler of the Mushroom Kingdom, is ready to speed!",
    "yoshi": "Yoshi, the friendly dinosaur, known for his speed and agility.",
    "toad": "Toad, the fast and fearless racer of the Mushroom Kingdom.",
    "bowser": "Bowser, the mighty king of the Koopas, brings power to the track!",
    "donkey-kong": "Donkey Kong, the jungle’s strongest racer!",
    "lakitu": "Lakitu, the race referee, now ready to compete!",
    "king-boo": "King Boo, the ghostly menace, drifts like a shadow!"
};

// Initially hide right panel
rightPanel.classList.add("hidden");

characterItems.forEach(item => {
    item.addEventListener("click", () => {
        characterItems.forEach(i => i.classList.remove("selected"));
        item.classList.add("selected");

        const characterName = item.getAttribute("data-character");
        const formattedName = characterName.replace("-", " "); // Ensure proper spacing in names

        characterNameElement.textContent = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
        characterTitle.textContent = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
        characterDescription.textContent = characterDescriptions[characterName] || "A brave racer ready for action!";

        characterImage.src = `assets/character-poses/${characterName}.png`;
        characterImage.style.display = "block"; // Show character image on selection
        
        rightPanel.classList.add("active"); // Show right panel

    });
});
