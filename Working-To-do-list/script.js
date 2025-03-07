/**  
 * DOCU: Initializes the task management functionality when the DOM is fully loaded.  
 * It retrieves necessary DOM elements and sets up event listeners for adding, removing, and toggling tasks.  
 * @event DOMContentLoaded - Triggers when the document is fully parsed.  
 */
document.addEventListener("DOMContentLoaded", function () {
    // Get necessary DOM elements
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const notifContainer = document.getElementById("notifContainer");

    // Event listener for add button
    addTaskBtn.addEventListener("click", addTask);

    // Event listener for "Enter" key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addTask();
        }
    });

    // Use event delegation for better performance
    taskList.addEventListener("click", function (event) {
        const target = event.target;

        if (target.classList.contains("delete-btn")) {
            removeTask(target);
        } else if (target.classList.contains("task-text")) {
            toggleTaskCompletion(target);
        }
    });

    /**  
     * DOCU: Adds a new task to the task list if the input is not empty.  
     * It trims the input value, validates it, and creates a task element.  
     * If the input is empty, it displays an error notification.  
     * Otherwise, it adds the task to the list, shows a success notification, and clears the input field.  
     * @function addTask  
     * @throws {Error} Displays an error notification if the task input is empty.  
     */
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            showNotification("Task cannot be empty!", "error");
            return;
        }

        const taskItem = createTaskElement(taskText);
        taskList.appendChild(taskItem);
        showNotification(`Task added: ${taskText}`, "success");

        taskInput.value = ""; // Clear input field
    }

    /**  
     * DOCU: Creates a task element with a given text, including a remove button.  
     * @function createTaskElement  
     * @param {string} taskText - The text content of the task.  
     * @returns {HTMLElement} - The created task list item.  
     */
    function createTaskElement(taskText) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete-btn">Remove</button>
        `;

        return taskItem;
    }

    /**  
     * DOCU: Removes a task from the task list when the remove button is clicked.  
     * It also displays a notification with the task details.  
     * @function removeTask  
     * @param {HTMLElement} button - The button element inside the task item.  
     */
    function removeTask(button) {
        const taskItem = button.closest("li");
        if (taskItem) {
            const taskText = taskItem.querySelector(".task-text").textContent;
            taskItem.remove();
            showNotification(`Task removed: ${taskText}`, "warning");
        }
    }

    /**  
     * DOCU: Toggles the completion state of a task when clicked.  
     * It updates the class and shows a notification based on the new state.  
     * @function toggleTaskCompletion  
     * @param {HTMLElement} taskTextElement - The span element containing the task text.  
     */
    function toggleTaskCompletion(taskTextElement) {
        const taskItem = taskTextElement.closest("li");
        taskItem.classList.toggle("completed");
        const taskText = taskTextElement.textContent;
        const state = taskItem.classList.contains("completed") ? "completed" : "uncompleted";
        showNotification(`Task marked as ${state}: ${taskText}`, "info");
    }

    /**  
     * DOCU: Displays a notification message with a specific type (success, error, warning, info).  
     * Notifications can be manually closed or will disappear after 5 seconds.  
     * @function showNotification  
     * @param {string} message - The message to be displayed.  
     * @param {string} type - The type of notification (success, error, warning, info).  
     */
    function showNotification(message, type) {
        const notification = document.createElement("div");
        notification.classList.add("notification", type);
        notification.innerHTML = `
            <span>${message}</span>
            <button class="close-btn">X</button>
        `;

        notifContainer.appendChild(notification);

        // Event listener for closing the notification
        notification.querySelector(".close-btn").addEventListener("click", function () {
            notification.remove();
        });

        // Auto-remove notification after 5 seconds
        setTimeout(() => notification.remove(), 5000);
    }
});
