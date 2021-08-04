const commentGet = async (idMeal) => {
  const fetchURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7w5w8pmXbpvQo9zrJ0vl/comments?item_id=${idMeal}`;

  await fetch(fetchURL, {
    method: 'get',
  })
    .then((response) => {
      if (response.status >= 400 && response.status < 600) {
        document.querySelector('.comment-amount').innerHTML += '<h3>Comments</h3>';
        document.querySelector('.comment-get').innerHTML += '<h6>Be the first one to comment!</h6>';
      }
      return response.json();
    })
    .then((data) => {
      if (data.length > 0) {
        const commentGetContainer = document.querySelector('.comment-get');

        document.querySelector('.comment-amount').innerHTML += `<h3>Comments (${data.length})</h3>`;

        for (let i = 0; i < data.length; i += 1) {
          const comment = data[i];
          const originalDate = comment.creation_date.split('-');
          const displayDate = `${originalDate[2]}/${originalDate[1]}/${originalDate[0]}`;
          commentGetContainer.innerHTML += `<h6>${displayDate} ${comment.username}: ${comment.comment}</h6>`;
        }
      }
    });
};
// eslint-disable-next-line
export { commentGet };