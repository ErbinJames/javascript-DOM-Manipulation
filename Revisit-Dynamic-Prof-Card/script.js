/**  
 * DOCU: Selects input fields and profile elements  
 */
const nameInput = document.getElementById("name-input");
const bioInput = document.getElementById("bio-input"); 
const imageInput = document.getElementById("image-input"); 
const bgColorInput = document.getElementById("bg-color-input"); 

const profileName = document.getElementById("profile-name");
const profileBio = document.getElementById("profile-bio");
const profilePicture = document.querySelector(".profile-picture");
const profileCard = document.querySelector(".profile-card");
const updateButton = document.getElementById("update-profile-btn");

/**  
 * DOCU: Validates if input is not empty or whitespace  
 * @param {string} inputValue - The input value to check  
 * @returns {boolean} - True if valid, false otherwise  
 */
function validateInput(inputValue) {
    return inputValue.trim() !== "";
}

/*  
 * DOCU: Updates the profile card with new values  
 * @returns {void}  
 */
function updateProfile() {
    if (!validateInput(nameInput.value)) {
        alert("Please enter a valid name.");
        return;
    }
    profileName.innerText = nameInput.value; 

    if (!validateInput(bioInput.value)) {
        alert("Please enter a valid bio.");
        return;
    }
    profileBio.innerText = bioInput.value;

    if (validateInput(imageInput.value)) {
        profilePicture.setAttribute("src", imageInput.value);
    }

    profileCard.style.backgroundColor = bgColorInput.value;
}

/*  
 * DOCU: Triggers profile update when button is clicked  
 */
updateButton.addEventListener("click", updateProfile);
