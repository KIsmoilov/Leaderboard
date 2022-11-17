const scoreList = document.querySelector('.scoreList');
const baseUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${process.env.API_KEY}/scores/`;

const showScores = ({ user, score }) => {
  const list = document.createElement('li');
  list.className = 'list-item';
  list.innerHTML = `<span class="name">${user}</span>:<span class="score">${score}</span>`;

  return list;
};

const getListOfInputs = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  const scores = data.result;
  scores.sort((x, y) => y.score - x.score);
  scoreList.innerHTML = '';

  scores.forEach((score) => {
    scoreList.appendChild(showScores(score));
  });
  return scores;
};

const addNewInput = async (newData) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const successResult = await response.json();
  getListOfInputs();
  return successResult.result;
};

module.exports = { getListOfInputs, addNewInput };