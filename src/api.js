// import leaderboardDisplay from './dom.js';

// const fetchURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XW3Ed1QYxBzVvRyVMvEB/scores';

// const leaderboardGet = async () => {
//   await fetch(fetchURL, {
//     method: 'get',
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       leaderboardDisplay(data.result);
//     });
// };

// const leaderboardPost = async (user, score) => {
//   const data = {
//     user,
//     score,
//   };

//   await fetch(fetchURL, {
//     method: 'post',
//     headers: new Headers({
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     }),
//     body: JSON.stringify(data),
//   });
// };

// export { leaderboardGet, leaderboardPost };