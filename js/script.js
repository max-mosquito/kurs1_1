const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
let filmRate = +prompt('На сколько оцените его?', '');
personalMovieDB.movies[lastFilm] = filmRate;

lastFilm = prompt('Один из последних просмотренных фильмов?', '');
filmRate = +prompt('На сколько оцените его?', '');
personalMovieDB.movies[lastFilm] = filmRate;

console.log(personalMovieDB);
