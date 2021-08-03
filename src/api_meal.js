import homepageFunction from './homepage.js';
import { commentsFunction } from './comments.js';

const fetchURL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

const mealGet = async () => {
  await fetch(fetchURL, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(1)
      homepageFunction(data.meals);
      console.log(2)

      commentsFunction(data.meals);
      console.log(3)

    });
};
// eslint-disable-next-line
export { mealGet };