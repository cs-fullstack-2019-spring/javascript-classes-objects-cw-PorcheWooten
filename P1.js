//Create a GitHubRepository class with attributes userName, fileName, descriptionOfRepository, and code.
// Create a function that prints all attributes.
// Create an object of the class and use the function.

class gitHubRepo
{
    constructor(userName, fileName, decriptionOfRepo, code)
    {
        this.userName= userName;
        this.fileName= fileName;
        this.descriptionOfRepo= decriptionOfRepo;
        this.code= code;
    }
    printAll()
    {
        console.log(this.userName + " " + this.fileName + " " + this.descriptionOfRepo + " " + this.code)
    }
}
var gitHub = new gitHubRepo ("PorcheW", "Classwork", "graded assignments", "javascript");
gitHub.printAll();