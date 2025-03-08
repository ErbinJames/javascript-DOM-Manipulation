document.addEventListener("DOMContentLoaded", function () {
    const jackBox = document.getElementById("closedBox");
    const button = document.getElementById("clickButton");
    const textLabel = document.getElementById("boxText");

    // Load audio files
    const openingSound = new Audio("gifs/opening sound.mp3"); 
    const popSound = new Audio("gifs/opened sound.mp3"); // sound when opened

    // Attach event listener ONLY to the button
    button.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent clicks from bubbling up
        toggleJackBox();
    });

    /*
     * DOCU: Toggles the state of the Jack-in-the-Box animation when the button is clicked.  
     * Plays corresponding sounds and animations while handling button states.    
     */  
    function toggleJackBox() {
        const isClosed = jackBox.getAttribute("data-state") === "closed";

        if (isClosed) {
            jackBox.setAttribute("data-state", "opening");
            jackBox.src = "gifs/536E.gif"; // Show "opening" animation
            textLabel.textContent = "Opening...";
            button.disabled = true; // Prevent spam clicking
            
            // Play opening sound
            openingSound.play();

            // After 2 seconds, switch to fully opened GIF
            setTimeout(() => {
                jackBox.setAttribute("data-state", "open");
                jackBox.src = "gifs/open.gif"; // Final "opened" GIF
                textLabel.textContent = "Opened!";
                button.textContent = "Close";
                button.disabled = false;
                
                // Play pop sound when fully opened
                popSound.play();
            }, 2000);

            // Reset back to closed state after 6 seconds
            setTimeout(resetJackBox, 6000);
        } else {
            resetJackBox();
        }
    }

    /*
     * DOCU: Resets the Jack-in-the-Box back to its initial closed state.  
     * Updates the image, text label, and button text accordingly.  
     */  
    function resetJackBox() {
        jackBox.setAttribute("data-state", "closed");
        jackBox.src = "gifs/close.gif"; // Back to closed box
        textLabel.textContent = "Open the box";
        button.textContent = "Click Me";
        button.disabled = false;
    }
});
