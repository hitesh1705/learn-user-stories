import Bank from "../src/bank";

//setup
const bank =  new Bank();

//scenerio 1
const account = bank.createAccount("John Doe", 25, "10029450");
if(account.accountNumber === "10029450"){
    console.log("Scenerio 1 passed");
}
else {
    console.log("Scenerio 1 failed");
}

//scenerio 2
try {
    bank.createAccount("John Doe", 25, "10029450");
    console.log("Scenerio 2 failed");
}
catch(_) {
    console.log("Scenerio 2 passed");
}