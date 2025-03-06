/**
 * DOCU: This script creates an interactive notification system where users can add and remove notifications dynamically.
 * The notification disappears after 5 seconds or when manually closed.
 * @event DOMContentLoaded - Ensures the script runs after the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
    // Select the button and notification container
    const button = document.getElementById("notification");
    const container = document.getElementById("notifContainer");
    /**
     * DOCU: Adds an event listener to the button to trigger a new notification.
     * Triggered when the "Show Notification" button is clicked.
     */
    button.addEventListener("click", function () {
        createNotification();
    });
    /**
     * DOCU: Creates and displays a new notification inside the container.
     * Appends the notification as a child element and includes a close button.
     */
    function createNotification() {
        // Create the notification element
        const notification = document.createElement("div");
        notification.classList.add("notification");

        // Set notification content
        notification.innerHTML = `
            <span>You have a new message!</span>
            <button class="close-btn">X</button>
        `;

        // Append the notification to the container
        container.appendChild(notification);
        /**
         * DOCU: Adds an event listener to the close button to remove the notification manually.
         * @event click - Triggers when the close button is clicked.
         */
        notification.querySelector(".close-btn").addEventListener("click", function () {
            notification.remove();
            checkContainerContent();
        });
        /**
         * DOCU: Automatically removes the notification after 5 seconds.
         * Uses setTimeout to delay the removal.
         */
        setTimeout(() => {
            notification.remove();
            checkContainerContent();
        }, 5000);
    }
    /**
     * DOCU: Checks the notification container and ensures it remains visible even if empty.
     * Clears any residual text content but keeps the structure intact.
     */
    function checkContainerContent() {
        if (container.children.length === 0) {
            container.innerHTML = ""; // Clears empty text content but keeps the container visible
        }
    }
    // Initialize the container's visibility state
    checkContainerContent();
});
