// location.reload()
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

if (!numberOfFilms) {
  location.reload();
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

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

let lastFilm;
let filmRate;
for (let i = 0; i < 2; i++) {
  lastFilm = prompt('Один из последних просмотренных фильмов?', '');
  filmRate = +prompt('На сколько оцените его?', '');

  if (lastFilm && filmRate && lastFilm.length < 10) {
    personalMovieDB.movies[lastFilm] = filmRate;
  } else {
    i--;
  }
}

console.log(personalMovieDB);
