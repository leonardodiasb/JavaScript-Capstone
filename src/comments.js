import { commentGet } from './api_comment.js';

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
        <input type="text" placeholder="Your Name"></input>
        <input type="text" placeholder="Your Insights"></input>
        <button type="button">Comment</button>
      </div>
    </div>
  </div>
  `;

  document.querySelector('main').appendChild(commentWindow);
  commentGet(meal.idMeal);

  addClosePopup();
};

// eslint-disable-next-line
const addMealPopupFunction = (idMeal) => {
  document.querySelector(`#meal${idMeal}`).addEventListener('click', () => mealPopup(idMeal));
};

export { commentsFunction, addMealPopupFunction };
