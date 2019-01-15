//Create a Bank class with the the name and balance attributes.
// Afterwards, create an object of the class and follow the instructions below:
// Creates an account named "Matt's account" with the balance of 1000
// Creates an account named "My account" with the balance of 0
// Withdraws 100.0 from Matt's account
// Deposits 100.0 to My account
// Prints both accounts

class Bank
{
    constructor(name, balance)
    {
        this.name = name;
        this.balance = balance;
    }
    withdraws(howMuchToWithdraw)
    {
        mattAccount = this.balance - howMuchToWithdraw;

    }
    Deposits(howMuchToDeposit)
    {
        myAccount = this.balance + howMuchToDeposit;
    }
}
var mattAccount = new Bank("Matt account", 1000 );
var myAccount = new Bank("Matt", 0);
mattAccount.withdraws(100);
myAccount.Deposits(100);
console.log("Matt's account balance is" + " $" + mattAccount);
console.log("My account balance is" + " $" + myAccount);