/**  
 * DOCU: Validates if the input value is not empty or only whitespace.  
 * @param {string} inputValue - The input value to be validated.  
 * @returns {boolean} - Returns true if the input is valid (not empty), otherwise false.  
 */
function validateInput(inputValue) {
    return inputValue.trim() !== "";
}

/**   
 * DOCU: Updates the profile name with the value entered in the input field.  
 * Triggers the required validation message if the input is empty.  
 * @returns {void} - This function does not return any value.  
 */
function updateName() {
    let nameInput = document.getElementById("name-input"); 
    let profileName = document.getElementById("profile-name");


    if (!validateInput(nameInput.value)) {
        alert("Please enter a valid name.");
        return;
    }
    
    profileName.innerText = nameInput.value;
}
/**  
 * DOCU: Updates the profile bio with the value entered in the input field.  
 * Triggers an alert if the input is empty.   
 */
function updateBio() {
    let bioInput = document.getElementById("bio-input"); 
    let profileBio = document.getElementById("profile-bio");

    if (!validateInput(bioInput.value)) {
        alert("Please enter a valid bio"); // it shows an alert message 
        return;
    } 
    profileBio.innerText = bioInput.value;
}

/**  
 * DOCU: Updates the profile picture with the provided image URL from the input field.  
 * If the input is empty, the function does nothing.   
 */
function updateImage() {
    let imageUrl = document.getElementById("image-input").value;
    let profilePicture = document.querySelector(".profile-picture");

    if (imageUrl) { 
        profilePicture.setAttribute("src", imageUrl); 
    } 
}

/**
 * DOCU: Updates the background color of the profile card with the selected color from the input field.  
 */
function updateBackground() {
    let newColor = document.getElementById("bg-color-input").value;
    let profileCard = document.querySelector(".profile-card");
    
    if (newColor) {
        profileCard.style.backgroundColor = newColor;
    }
}