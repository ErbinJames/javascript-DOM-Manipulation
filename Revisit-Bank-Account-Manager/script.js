// Select necessary DOM elements
const balanceDisplay = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const messageBox = document.getElementById("message");
const transactionHistory = document.getElementById("transactionHistory");

// Initialize balance and tracking
let balance = 2000;
let dailyWithdrawn = 0;
const dailyLimit = 500;
let transactions = [];

// Initial UI update
updateBalanceDisplay();

// Attach event listeners
depositBtn.addEventListener("click", () => processTransaction("deposit"));
withdrawBtn.addEventListener("click", () => processTransaction("withdraw"));

/**
 * DOCU: Handles deposit and withdrawal transactions
 * @param {string} type - "deposit" or "withdraw"
 */
function processTransaction(type) {
    let amount = parseFloat(amountInput.value);

    if (!isValidAmount(amount)) {
        showMessage(`Please enter a valid ${type} amount.`, "danger");
        return;
    }

    if (type === "withdraw" && !canWithdraw(amount)) {
        return;
    }

    updateBalance(type, amount);
    showMessage(`Successfully ${type}ed $${amount.toFixed(2)}`, "success");
    amountInput.value = "";

    transactions.unshift({ type, amount });
    updateTransactionHistory();
}

/**
 * DOCU: Validates if the entered amount is a valid number
 * @param {number} amount
 * @returns {boolean}
 */
function isValidAmount(amount) {
    return !isNaN(amount) && amount > 0;
}

/**
 * DOCU: Checks if withdrawal is allowed based on balance and daily limit
 * @param {number} amount
 * @returns {boolean}
 */
function canWithdraw(amount) {
    if (amount > balance) {
        showMessage("Insufficient balance!", "danger");
        return false;
    }
    if (dailyWithdrawn + amount > dailyLimit) {
        showMessage("Daily withdrawal limit reached!", "danger");
        return false;
    }
    dailyWithdrawn += amount;
    return true;
}

/**
 * DOCU: Updates the balance based on transaction type
 * @param {string} type
 * @param {number} amount
 */
function updateBalance(type, amount) {
    balance = type === "deposit" ? balance + amount : balance - amount;
    updateBalanceDisplay();
}

/**
 * DOCU: Updates balance display with proper formatting
 */
function updateBalanceDisplay() {
    balanceDisplay.textContent = `$${balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
}

/**
 * DOCU: Displays a message to the user
 * @param {string} msg
 * @param {string} type - "success" or "danger"
 */
function showMessage(msg, type) {
    messageBox.innerHTML = `<div class="alert alert-${type} text-center">${msg}</div>`;
    setTimeout(() => (messageBox.innerHTML = ""), 3000);
}

/**
 * Updates the transaction history display
 */
function updateTransactionHistory() {
    transactionHistory.innerHTML = "";

    transactions.forEach((txn) => {
        const txnItem = document.createElement("div");
        txnItem.classList.add("p-2", "mb-2", "rounded", "shadow-sm","text-dark");
        txnItem.style.backgroundColor = "#D9D9D9";
        txnItem.innerHTML = `<strong>${txn.type.toUpperCase()}:</strong> $${txn.amount.toFixed(2)}`;
        txnItem.classList.add(txn.type === "deposit" ? "text-success" : "text-danger");
        transactionHistory.appendChild(txnItem);
    });
}
