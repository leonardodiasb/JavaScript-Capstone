import homepageFunction from './homepage.js';
// import commentsFunction from './comments.js';

const fetchURL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

const mealGet = async () => {
  await fetch(fetchURL, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((data) => {
      homepageFunction(data.meals);
      // commentsFunction(data.meals);
    });
};

export { mealGet };