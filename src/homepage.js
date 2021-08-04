import { postLikes, getLikes, likesArray } from './api_like.js';

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
                <p>${meal.strMeal}</p>
                <div class='likes-container'>
                  <p class='likes-number'></p>
                  <p class='heart'>♡</p>
                </div>
            </div>
            <button type='button' class='comments-btn'>Comments</button>
            `;
    mealContainer.appendChild(mealItem);
  }
  getLikes().then(v => updateLikesHTML());
  addLikeEvent();
}

const addLikeEvent = () => {
  let itemsList = document.querySelectorAll('.heart');
  let len = itemsList.length;
  console.log(itemsList);
  for (let index = 0; index < len; index += 1) {
    itemsList[index].addEventListener('click', (e) => {
      let mealId = e.target.parentNode.parentNode.parentNode.id;
      postLikes(mealId);
      updateLikes(e);
    })
  }
}

const updateLikes = (e) => {
  let numberOfLikes = e.target.parentNode.firstChild.nextSibling;
  numberOfLikes.innerHTML = Number(numberOfLikes.innerHTML) + 1;
}

const updateLikesHTML = () => {
  let numberOfLikesArray = document.querySelectorAll('.likes-number');
  numberOfLikesArray.forEach(element => {
    let mealId = element.parentNode.parentNode.parentNode.id
    let numberOfLikes = element.parentNode.firstChild.nextSibling;
    
    var filteredValue = likesArray[0].filter(function (item) {
      if(item.item_id == mealId) {
        return item.likes;
      }
    });
    numberOfLikes.innerHTML = filteredValue[0].likes;
  });
}

export { homepageFunction, addLikeEvent };