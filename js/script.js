// location.reload()
let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
    location.reload();
  }
}

detectPersonalLevel();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    const filmRate = +prompt('На сколько оцените его?', '');

    if (lastFilm && filmRate && lastFilm.length < 10) {
      personalMovieDB.movies[lastFilm] = filmRate;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

function showMyDB() {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYuorGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i}`,
      ''
    );
  }
}

writeYuorGenres();

console.log(personalMovieDB);
