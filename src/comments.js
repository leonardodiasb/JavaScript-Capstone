import { commentGet, commentPost } from './api_comment.js';

let mealList = [];

const commentsFunction = (meals) => {
  mealList = meals;
};

const mealDetails = (idMeal) => mealList.filter((meal) => meal.idMeal === idMeal)[0];

const addClosePopup = () => {
  document.querySelector('.close-comment').addEventListener('click', () => {
    document.querySelector('.comment-background').remove();
  });
};

const clearFormField = () => {
  document.querySelector('#comment-username').value = '';
  document.querySelector('#comment-comment').value = '';
};

const displayCommentAmount = () => {
  const commentAmount = document.querySelector('.comment-amount');

  if (commentAmount.innerHTML.includes('(')) {
    const initialAmount = commentAmount.innerHTML.split('(')[1].split(')')[0];
    const finalAmount = Number(initialAmount) + 1;
    commentAmount.innerHTML = `<h3>Comments (${finalAmount})</h3>`;
  } else {
    commentAmount.innerHTML = '<h3>Comments (1)<h3>';
  }
};

const displayNewComment = (username, comment) => {
  const commentGet = document.querySelector('.comment-get');
  const dateObj = new Date();
  const month = String(dateObj.getUTCMonth() + 1); // months from 1-12
  const day = String(dateObj.getUTCDate());
  const year = String(dateObj.getUTCFullYear());

  const displayDate = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;

  if (commentGet.innerHTML.includes('Be the first one to comment!')) {
    commentGet.innerHTML = '';
  }
  commentGet.innerHTML += `<h6>${displayDate} ${username}: ${comment}</h6>`;
};

const addMealCommentFunction = (idMeal) => {
  document.querySelector('#comment-post').addEventListener('click', () => {
    const username = document.querySelector('#comment-username').value;
    const comment = document.querySelector('#comment-comment').value;

    if (username.length >= 3 && comment.length >= 3) {
      commentPost(idMeal, username, comment);
      clearFormField();
      displayNewComment(username, comment);
      displayCommentAmount();
    }
  });
};

const mealPopup = (idMeal) => {
  const meal = mealDetails(idMeal);
  const commentWindow = document.createElement('div');
  commentWindow.classList.add('comment-background');

  commentWindow.innerHTML = `
  <div class="comment-container">
    <img src="${meal.strMealThumb}" a="${meal.strMeal}" />
    <button class="close-comment">✖</button>
    <div>
      <h2>${meal.strMeal}</h2>
      <div>
        <h5>Nationality: ${meal.strArea}</h5>
        <h5>Category: ${meal.strCategory}</h5>
      </div>

      <h3 class="comment-amount"></h3>
      <div class="comment-get"></div>

      <h3>Add a comment</h3>
      <div>
        <input type="text" placeholder="Your Name" id="comment-username" minlength="3"></input>
        <input type="text" placeholder="Your Insights" id="comment-comment" minlength="3"></input>
        <button type="button" id="comment-post">Comment</button>
      </div>
    </div>
  </div>
  `;

  document.querySelector('main').appendChild(commentWindow);
  commentGet(meal.idMeal);
  addMealCommentFunction(idMeal);

  addClosePopup();
};

// eslint-disable-next-line
const addMealPopupFunction = (idMeal) => {
  document.querySelector(`#meal${idMeal}`).addEventListener('click', () => mealPopup(idMeal));
};

export { commentsFunction, addMealPopupFunction };
