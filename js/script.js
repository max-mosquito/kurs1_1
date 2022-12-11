const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  detectPersonalLevel: function () {
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
  },
  privat: false,
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
      console.log(personalMovieDB.privat);
    } else {
      personalMovieDB.privat = true;
      console.log(personalMovieDB.privat);
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
      const filmRate = +prompt('На сколько оцените его?', '');

      if (lastFilm && filmRate && lastFilm.length < 10) {
        personalMovieDB.movies[lastFilm] = filmRate;
      } else {
        i--;
      }
    }
  },
  writeYuorGenres: function () {
    for (let i = 1; i < 4; i++) {
      const a = prompt(`Ваш любимый жанр под номером ${i}`, '');
      console.log(a);
      if (!a) {
        console.log('NO');
        i--;
      } else {
        personalMovieDB.genres = [...personalMovieDB.genres, a];
      }
    }
    personalMovieDB.genres.forEach((item, index) => {
      console.log(`Любимый жанр #${index + 1} - это ${item}`);
    });
  },
  showMyDB: function () {
    console.log(personalMovieDB.privat);
  },
};

personalMovieDB.start();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.showMyDB();

personalMovieDB.writeYuorGenres();

console.log(personalMovieDB);
