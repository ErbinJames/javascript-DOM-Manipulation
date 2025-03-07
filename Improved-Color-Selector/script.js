/*  
 * DOCU: Adds click event listeners to all elements with class "color-box"  
 * Updates the background color, text color, and selected state upon click  
 */
document.querySelectorAll(".color-box").forEach(button => {
    button.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent event bubbling

        // Get computed background color of the clicked button
        let bgColor = window.getComputedStyle(this).backgroundColor;

        // Apply selected color to the body background
        document.body.style.backgroundColor = bgColor;

        // Apply selected color to the container background
        document.getElementById("container").style.backgroundColor = bgColor;

        // Update displayed text to show selected color
        document.getElementById("selected-color").textContent = "Selected Color: " + this.textContent;

        // Extract RGB values from the computed background color
        let [r, g, b] = bgColor.match(/\d+/g).map(Number);

        // Calculate brightness using the luminance formula
        let brightness = (r * 0.299) + (g * 0.587) + (b * 0.114);

        // Set text color to white for dark backgrounds, black for light backgrounds
        let textColor = (brightness < 128) ? "white" : "black";
        document.body.style.color = textColor;
        document.getElementById("selected-color").style.color = textColor;

        // Remove "selected" class from all buttons
        document.querySelectorAll(".color-box").forEach(btn => btn.classList.remove("selected"));

        // Add "selected" class to the clicked button for visual indication
        this.classList.add("selected");
    });
});
