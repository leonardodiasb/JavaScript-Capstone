let mealList = [];

const commentsFunction = (meals) => {
  console.log(1);
  mealList = meals;
  console.log(2);
  console.log(mealList);

console.log(mealPopup('52894'));

};

const mealDetails = (idMeal) => {
  return mealList.filter(meal => meal.idMeal === idMeal)[0];
};

const mealPopup = (idMeal) => {
  console.log(3);
  const meal = mealDetails(idMeal);
  console.log(4);
  console.log(meal);

  const commentWindow = document.createElement('div');
  commentWindow.classList.add('comment-container');
  commentWindow.innerHTML = 
  `
    <img src="${meal.strMealThumb}" a="${meal.strMeal}" />
    <div>
      <h3>${meal.strMeal}</h3>
      <div>
        <h5>${meal.strArea}</h5>
        <h5>${meal.strCategory}</h5>
      </div>

      <h3>Comments()</h3>
      <div>
        <h6>03/11/2021 Alex: I'd love to cook that!</h6>
        <h6>03/11/2021 Mia: I love cooking!</h6>
      </div>

      <h3>Add a comment</h3>
      <div>
        <input type="text" placeholder="Your Name"></input>
        <input type="text" placeholder="Your Insights"></input>
        <button type="button">Comment</button>
      </div>
    </div>
  `;
  document.body.appendChild(commentWindow);
  console.log(5);
};

export { commentsFunction, mealPopup };
