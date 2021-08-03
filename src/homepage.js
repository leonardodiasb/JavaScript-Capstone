import mealGet from './api_meal';

export default function homepageFunction(array) {
    let container = document.querySelector('main');
    let mealContainer = document.createElement('div');
    mealContainer.classList.add('meal-container');

    container.appendChild(mealContainer);

    for (let index = 0; index < 6; index += 1) {
        let meal = array[index];
        let mealItem = document.createElement('div');
        mealItem.id = meal.idMeal;
        mealItem.classList.add('meal-item')
        mealItem.innerHTML = `
            <img src='${meal.strMealThumb}' a='${meal.strMeal} image' class='meal-img'>
            <div class='information'>    
                <p>${meal.strMeal}</p>
                <p class='empty-heart'>♡</p>
                <p class='full-heart'>♥️</p>
            </div>
            <button type='button' class='comments-btn'>Comments</button>
            `
        mealContainer.appendChild(mealItem)
        
    }
}
