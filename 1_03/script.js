var movieList = [];
var counter = 0;
var movieTitle = document.querySelector('.movieTitle');
var movieLength = document.querySelector('.movieLength');
var movieGenre = document.querySelector('#movieGenre');
var finalMovieList = document.querySelector('.finalMovieList');
var span = document.querySelector('span');
var resetInput = document.querySelector('input');
var resetSelect = document.querySelector("select");

function Movie(movieTitle, movieGenre, movieLength) {
    this.movieTitle = movieTitle;
    this.movieGenre = movieGenre;
    this.movieLength = movieLength;
    this.getData = function () {
        return this.movieTitle + ", " + this.movieGenre + ", " + this.movieLength;
    }
}

function createMovie(movieTitle, movieGenre, movieLength) {
    return new Movie(movieTitle, movieGenre, movieLength);
}

document.querySelector('.create-movie').addEventListener('click', function (event) {
    // var ourMovie = document.querySelector('#movieGenre');
    // var movieGenreSelect = document.querySelector('#movieGenre').selectedIndex;
    // var movieGenre = document.querySelector('#movieGenre').option[movieGenreSelect].value;
    var validation = false;


    if (movieTitle === "") {
        document.querySelector('#title-error').textContent = 'Please fill in this field';
    }

   else if (!movieLength) {
        document.querySelector('#length-error').textContent = 'Please fill in this field';
    }
    else if (movieGenre == "-") {
        document.querySelector('#genre-error').textContent = 'Please select the genre';
    }
    else {
        validation = true;
    }


    var movie = createMovie(movieTitle.value, movieGenre.value, movieLength.value);

    movieList.push(movie);
    
    var newLi = document.createElement('li');
    var newString = document.createTextNode(movie.getData());
    if (validation == true) {
        counter += parseInt(movieLength.    value); 
    newLi.appendChild(newString)
    finalMovieList.appendChild(newLi);
    var lengthCounter = span.innerHTML = counter.toString();
    resetInput.value = "";
    resetSelect.value = "";
    movieLength.value = "";
    }

});