// Interface indicating the type for all bank accounts in the bank
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * Bank class that manages all bank accounts in the bank
 */
export default class Bank {
    // Array to store all bank accounts in the bank 
    private accounts: BankAccount[] = [];

    /**
     * Method to find a bank account in the bank
     * @param {string} accountNumber - Account number of the bank account to find
     * @returns {BankAccount | undefined} - Bank account if found, undefined otherwise
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }

    /**
     * Creates a new account with a unique account number
     * @param {string} name - Name of the customer
     * @param {number} age - Age of the customer
     * @param {string} accountNumber - Account number of the customer
     * @returns {BankAccount} - The newly created bank account
     * @throws {Error} - If an account with the same account number already exists
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const accountExists = this.findAccount(accountNumber);
        if (accountExists) {
            throw new Error("Account already exists");
        }

        const newAccount: BankAccount = {
            name,
            age,
            accountNumber,
            balance: 0
        };

        this.accounts.push(newAccount);
        return newAccount;
    }

    /**
     * Deposits money into an existing bank account
     * @param {string} accountNumber - Account number to deposit into
     * @param {number} amount - Amount to deposit
     * @returns {number} - The updated balance after the deposit
     * @throws {Error} - If the account does not exist or the deposit amount is non-positive
     */
    public deposit(accountNumber: string, amount: number): number {
        const account = this.findAccount(accountNumber);

        if (!account) {
            throw new Error("Account does not exist");
        }

        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }

        account.balance += amount;
        return account.balance;
    }

    /**
     * Withdraws money from an existing bank account
     * @param {string} accountNumber - Account number to withdraw from
     * @param {number} amount - Amount to withdraw
     * @returns {number} - The updated balance after the withdrawal
     * @throws {Error} - If the account does not exist, insufficient funds, or withdrawal amount is non-positive
     */
    public withdraw(accountNumber: string, amount: number): number {
        const account = this.findAccount(accountNumber);

        if (!account) {
            throw new Error("Account does not exist");
        }

        if (amount <= 0) {
            throw new Error("Withdrawal amount should be positive");
        }

        if (account.balance < amount) {
            throw new Error("Insufficient funds");
        }

        account.balance -= amount;
        return account.balance;
    }

    /**
     * Checks the balance of an existing bank account
     * @param {string} accountNumber - Account number to check the balance for
     * @returns {number} - The current balance of the account
     * @throws {Error} - If the account does not exist
     */
    public checkBalance(accountNumber: string): number {
        const account = this.findAccount(accountNumber);

        if (!account) {
            throw new Error("Account does not exist");
        }

        return account.balance;
    }
}