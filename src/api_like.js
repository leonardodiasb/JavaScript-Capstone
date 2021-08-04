const fetchURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7w5w8pmXbpvQo9zrJ0vl/likes';

const postLikes = async (mealId) => {
  await fetch(fetchURL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: mealId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
// eslint-disable-next-line
let likesArray = [];

const getLikes = async () => {
  await fetch(fetchURL)
    .then((response) => response.json())
    .then((data) => {
      likesArray = [];
      likesArray.push(data);
    });
};

export { postLikes, getLikes, likesArray };