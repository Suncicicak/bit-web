var movieList = [];
var counter = 0;
var programList = [];
var count = 0;

function Movie(movieTitle, movieGenre, movieLength) {
    this.movieTitle = movieTitle;
    this.movieGenre = movieGenre;
    this.movieLength = movieLength;
    this.getData = function () {
        var shortGenre = "";
        for (var i = 0; i < this.movieGenre.length; i++) {
            shortGenre = this.movieGenre[0] + this.movieGenre[this.movieGenre.length - 1].toUpperCase();
        }
        return this.movieTitle + ", " + this.movieLength + " min, " + shortGenre;
    }
}

function createMovie(movieTitle, movieGenre, movieLength) {
    return new Movie(movieTitle, movieGenre, movieLength);
}

function Program(date, movies) {
    this.date = new Date(date);
    this.movies = movies;
    this.getData = function () {
        return this.date + ', ' + movie.getData();
    }
}

function createProgram(date, movies) {
    return new Program(date, movies.getData());
}

document.querySelector('.create-movie').addEventListener('click', function (event) {
    var movieTitleInput = document.querySelector('.movieTitle');
    var movieLengthInput = document.querySelector('.movieLength');
    var movieGenreInput = document.querySelector('#movieGenre');
    var finalMovieList = document.querySelector('.finalMovieList');
    var span = document.querySelector('span');
    var resetInput = document.querySelector('input');
    var resetSelect = document.querySelector("select");
    var resetMovieLength = document.querySelector('.movieLength');
    // var ourMovie = document.querySelector('#movieGenre');
    // var movieGenreSelect = document.querySelector('#movieGenre').selectedIndex;
    // var movieGenre = document.querySelector('#movieGenre').option[movieGenreSelect].value;
    var validation = false;

    var movieTitle = movieTitleInput.value;
    var movieLength = movieLengthInput.value;
    var movieGenre = movieGenreInput.value;

    if (movieTitle === "") {
        document.querySelector('#title-error').textContent = 'Please fill in this field';

    } else if (!movieLength) {
        document.querySelector('#length-error').textContent = 'Please fill in this field';
    } else if (movieGenre == "-") {
        document.querySelector('#genre-error').textContent = 'Please select the genre';
    } else {
        validation = true;
    }

    var movie = createMovie(movieTitle, movieGenre, movieLength);

    movieList.push(movie);

    var newLi = document.createElement('li');
    var newString = document.createTextNode(movie.getData());
    if (validation == true) {
        counter += parseInt(movieLength);
        newLi.appendChild(newString)
        finalMovieList.appendChild(newLi);
        var lengthCounter = span.innerHTML = counter.toString();
        resetInput.value = "";
        resetSelect.value = "";
        resetMovieLength.value = "";
    }

});

document.querySelector('.create-program').addEventListener('click', function (event) {
    var programDateInput = document.querySelector('.programDate');
    var resetDate = document.querySelector('.programDate');


    var programDate = programDateInput.value;
    var validation = false;

    if (programDate == "") {
        document.querySelector('#date-error').textContent = 'Please set the date';
    } else {
        validation = true;
    }

    var program = createProgram(programDate, movie());

    programList.push(program);

    // var newLi = document.createElement('li');
    // var newString = document.createTextNode(program.getData());
    // if (validation == true) {
    //     newLi.appendChild(newString)
    //     finalProgramList.appendChild(newLi);
        resetDate.value = "";
    }
});