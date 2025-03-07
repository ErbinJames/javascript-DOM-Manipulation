/*  
 * DOCU: Selects necessary DOM elements  
 */
const balanceDisplay = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const messageBox = document.getElementById("message");

/*  
 * DOCU: Initializes the account balance  
 */
let balance = 1000;
balanceDisplay.textContent = balance;

/**  
 * DOCU: Handles deposit and withdrawal transactions  
 * @param {string} type - Transaction type ("deposit" or "withdraw")  
 */
function handleTransaction(type) {
    let amount = parseFloat(amountInput.value);

    // Validate input amount
    if (isNaN(amount) || amount <= 0) {
        showMessage(`Please enter a valid ${type} amount.`, "danger");
        return;
    }

    // Check for insufficient funds on withdrawal
    if (type === "withdraw" && amount > balance) {
        showMessage("Insufficient balance!", "danger");
        return;
    }

    // Update balance based on transaction type
    balance = type === "deposit" ? balance + amount : balance - amount;
    balanceDisplay.textContent = balance;

    // Show success message and clear input field
    showMessage(`Successfully ${type}ed $${amount}`, "success");
    amountInput.value = "";
}
/*  
 * DOCU: Adds event listeners for transaction buttons  
 */
depositBtn.addEventListener("click", () => handleTransaction("deposit"));
withdrawBtn.addEventListener("click", () => handleTransaction("withdraw"));

/** 
 * DOCU: Displays a message to the user  
 * @param {string} msg - Message text  
 * @param {string} type - Message type ("success" or "danger")    
 */
function showMessage(msg, type) {
    messageBox.innerHTML = `<div class="alert alert-${type}">${msg}</div>`;
    setTimeout(() => (messageBox.innerHTML = ""), 3000);
}
