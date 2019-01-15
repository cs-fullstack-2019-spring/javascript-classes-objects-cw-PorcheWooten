//Create a Movie class with the following attributes: movieName, rating, and yearReleased.
// Create a method to change the rating and another one to change the yearReleased attributes.
// Create an object of the class and use the two functions you created.

class movie
{
    constructor(movieName, rating, yearReleased)
    {
        this.movieName = movieName;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }
    changeRating(newRating)
    {
        this.rating = newRating;
    }
    changeYearReleased(newReleaseDate)
    {
        this.yearReleased = newReleaseDate;
    }

}
var myMovie = new movie("Escape Room", "R", 2018);
myMovie.changeRating("PG-13");
myMovie.changeYearReleased("2019");
console.log(myMovie.movieName + " " + myMovie.rating + " " + myMovie.yearReleased);