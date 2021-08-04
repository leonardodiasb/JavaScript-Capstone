import { postLikes, getLikes, likesArray } from './api_like.js';
import { addMealPopupFunction } from './comments.js';

const updateLikes = (e) => {
  const numberOfLikes = e.target.parentNode.firstChild.nextSibling;
  numberOfLikes.innerHTML = Number(numberOfLikes.innerHTML) + 1;
};

const addLikeEvent = () => {
  const itemsList = document.querySelectorAll('.heart');
  const len = itemsList.length;
  for (let index = 0; index < len; index += 1) {
    itemsList[index].addEventListener('click', (e) => {
      const mealId = e.target.parentNode.parentNode.parentNode.id;
      postLikes(mealId);
      updateLikes(e);
    });
  }
};

const updateLikesHTML = () => {
  const numberOfLikesArray = document.querySelectorAll('.likes-number');
  numberOfLikesArray.forEach((element) => {
    const mealId = element.parentNode.parentNode.parentNode.id;
    const numberOfLikes = element.parentNode.firstChild.nextSibling;
    // eslint-disable-next-line
    const filteredValue = likesArray[0].filter((item) => {
      if (item.item_id === mealId) {
        return item.likes;
      }
    });
    numberOfLikes.innerHTML = filteredValue[0].likes;
  });
};

const homepageFunction = (array) => {
  const container = document.querySelector('main');
  const mealContainer = document.createElement('div');
  mealContainer.classList.add('meal-container');

  container.appendChild(mealContainer);

  for (let index = 0; index < 6; index += 1) {
    const meal = array[index];
    const mealItem = document.createElement('div');
    mealItem.id = meal.idMeal;
    mealItem.classList.add('meal-item');
    mealItem.innerHTML = `
            <img src='${meal.strMealThumb}' a='${meal.strMeal} image' class='meal-img'>
            <div class='information'>    
                <h4>${meal.strMeal}</h4>
                <div class='likes-container'>
                  <p class='likes-number'></p>
                  <p class='heart'>♡</p>
                </div>
            </div>
            <button type='button' class='comments-btn' id="meal${meal.idMeal}">Comments</button>
            `;
    mealContainer.appendChild(mealItem);

    addMealPopupFunction(meal.idMeal);
  }
  getLikes().then(() => updateLikesHTML());
  addLikeEvent();
};

export { homepageFunction, addLikeEvent };