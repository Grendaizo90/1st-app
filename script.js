"use strict";

// Часть 1. Задаём вопросы, добавляем значения
// в personalMovieDB


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      private: false
};

// Часть 2. Автоматизация вопросов юзеру с помощью циклов.
// Практика по циклам

for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");
      
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
      } else {
            console.log('Error');
            i--;
      }     
}

// let i = 0;

// while (i < 2) {
//       const a = prompt("Один из последних просмотренных фильмов?", ""),
//             b = prompt("На сколько оцените его?", "");
      
//       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('Done');
//             i++;
//       } else {
//             console.log('Error');
//             continue;
//       }     
// }

if (personalMovieDB.count < 10) {
      console.log("Просмотрено слишком мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
} else {
      console.log("Произошла ошибка");
}

console.log(personalMovieDB);