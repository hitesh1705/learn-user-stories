import Bank from "../src/bank";

//setup
const bank =  new Bank();
const account = bank.createAccount("John Doe", 25, "10029450");

//scenerio 1
if(account.accountNumber === "10029450"){
    console.log("Scenerio 1 passed");
}
else {
    console.log("Scenerio 1 failed");
}

//scenerio 2
try {
    bank.createAccount("John Doe", 25, "10029450");
    console.log("Scenario 2 failed");
} catch (error) {
    if (error.message === "Account already exists") {
        console.log("Scenario 2 passed");
    } else {
        console.log("Scenario 2 failed: Unexpected error");
    }
}

// Scenario 1: Successful deposit
try {
    const newBalance = bank.deposit("10029450", 100);
    if (newBalance === 100) {
        console.log("Scenario 1 passed");
    } else {
        console.log("Scenario 1 failed: Incorrect balance after deposit");
    }
} catch (error) {
    console.log("Scenario 1 failed: Unexpected error", error);
}

// Scenario 2: Failed deposit due to invalid account number
try {
    bank.deposit("99999999", 100);
    console.log("Scenario 2 failed: Deposit should not be possible with invalid account number");
} catch (error) {
    if (error.message === "Account does not exist") {
        console.log("Scenario 2 passed");
    } else {
        console.log("Scenario 2 failed: Unexpected error", error);
    }
}

// Scenario 3: Failed deposit due to invalid amount entered
try {
    bank.deposit("10029450", -50);
    console.log("Scenario 3 failed: Deposit should not be possible with a non-positive amount");
} catch (error) {
    if (error.message === "Deposit amount must be positive") {
        console.log("Scenario 3 passed");
    } else {
        console.log("Scenario 3 failed: Unexpected error", error);
    }
}

bank.deposit("10029450", 500);  // Adding some balance for testing

// Scenario 1: Successful withdrawal
try {
    const newBalance = bank.withdraw("10029450", 200);
    if (newBalance === 300) {
        console.log("Scenario 1 passed");
    } else {
        console.log("Scenario 1 failed: Incorrect balance after withdrawal");
    }
} catch (error) {
    console.log("Scenario 1 failed: Unexpected error", error);
}

// Scenario 2: Failed withdrawal due to insufficient funds
try {
    bank.withdraw("10029450", 400);
    console.log("Scenario 2 failed: Withdrawal should not be possible with insufficient funds");
} catch (error) {
    if (error.message === "Insufficient funds") {
        console.log("Scenario 2 passed");
    } else {
        console.log("Scenario 2 failed: Unexpected error", error);
    }
}

// Scenario 3: Failed withdrawal due to invalid amount
try {
    bank.withdraw("10029450", -50);
    console.log("Scenario 3 failed: Withdrawal should not be possible with a non-positive amount");
} catch (error) {
    if (error.message === "Withdrawal amount should be positive") {
        console.log("Scenario 3 passed");
    } else {
        console.log("Scenario 3 failed: Unexpected error", error);
    }
}

// Scenario 4: Failed withdrawal due to invalid account
try {
    bank.withdraw("99999999", 100);
    console.log("Scenario 4 failed: Withdrawal should not be possible with an invalid account");
} catch (error) {
    if (error.message === "Account does not exist") {
        console.log("Scenario 4 passed");
    } else {
        console.log("Scenario 4 failed: Unexpected error", error);
    }
}

bank.deposit("10029450", 500);  // Adding some balance for testing

// Scenario 1: Successful balance check
try {
    const balance = bank.checkBalance("10029450");
    if (balance === 500) {
        console.log("Scenario 1 passed: Correct balance displayed");
    } else {
        console.log("Scenario 1 failed: Incorrect balance displayed");
    }
} catch (error) {
    console.log("Scenario 1 failed: Unexpected error", error);
}

// Scenario 2: Failed balance check for invalid account
try {
    bank.checkBalance("99999999");
    console.log("Scenario 2 failed: Should not check balance for invalid account");
} catch (error) {
    if (error.message === "Account does not exist") {
        console.log("Scenario 2 passed: Correct error for invalid account");
    } else {
        console.log("Scenario 2 failed: Unexpected error", error);
    }
}