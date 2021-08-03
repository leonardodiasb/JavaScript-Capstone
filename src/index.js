// import { leaderboardGet, leaderboardPost } from './api.js';
import { mealGet } from './api_meal.js';
import './style.css';

window.onload = mealGet;



// document.querySelector('#submit').addEventListener('click', () => {
//   // eslint-disable-next-line
//   let user = document.querySelector('#user').value;
//   // eslint-disable-next-line
//   let score = document.querySelector('#score').value;

//   document.querySelector('#user').value = '';
//   document.querySelector('#score').value = '';

//   leaderboardPost(user, score);
// });

// document.querySelector('#refresh').addEventListener('click', leaderboardGet);

