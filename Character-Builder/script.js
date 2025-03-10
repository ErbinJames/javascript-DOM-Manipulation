const gearItems = document.querySelectorAll(".gear-item");

/** 
 * DOCU: Function to handle gear selection by updating the character's equipment  
 * @param {HTMLElement} item - The clicked gear item containing `data-part` and `data-src` attributes  
 * @returns {void} - Updates the corresponding character gear image  
 */
function changeGear(item) {
    const gearType = item.getAttribute("data-part"); // Get the gear type (helmet, armor, leggings, boots)
    const newSrc = item.getAttribute("data-src"); // Get the new image source for the selected gear
    const characterGear = document.querySelector(`.character-gear.${gearType}`); // Select the corresponding character gear image

    if (characterGear) {
        // Add a fade effect before changing the image
        characterGear.style.opacity = "0";

        setTimeout(() => {
            characterGear.setAttribute("src", newSrc); // Update the gear image
            characterGear.style.opacity = "1"; // Restore opacity after change
        }, 200); // Smooth transition delay
    }
}

/** 
 * DOCU: Function to add hover effect on gear items  
 * @param {HTMLElement} item - The gear item being hovered over  
 * @returns {void} - Scales up the item for a visual effect  
 */
function addHoverEffect(item) {
    item.style.transform = "scale(1.1)";
    item.style.transition = "transform 0.2s ease-in-out";
}

/**  
 * DOCU: Function to remove hover effect when the mouse leaves the gear item  
 * @param {HTMLElement} item - The gear item that is no longer hovered over  
 * @returns {void} - Resets the item's scale back to normal  
 */
function removeHoverEffect(item) {
    item.style.transform = "scale(1)";
}

/**
 * DOCU: Function to attach event listeners to all gear items  
 * @returns {void} - Adds click and hover event listeners to each gear item  
 */
function attachEventListeners() {
    gearItems.forEach((item) => {
        item.addEventListener("click", () => changeGear(item)); // Handles gear selection
        item.addEventListener("mouseover", () => addHoverEffect(item)); // Adds hover effect
        item.addEventListener("mouseout", () => removeHoverEffect(item)); // Removes hover effect
    });
}

// Initialize event listeners
attachEventListeners();

// Initialize event listeners
attachEventListeners();
