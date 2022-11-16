const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${process.env.API_KEY}/scores/';

const addGame = () => {
  fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: 'John',
      score: 50,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};
