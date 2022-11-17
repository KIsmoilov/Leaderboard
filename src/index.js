import './index.css';
import { getListOfInputs, addNewInput } from './utilities.js';

const form = document.querySelector('.inputScores');
const refreshButton = document.querySelector('.refreshBtn');
const successMsg = document.querySelector('.successMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = form.elements.user;
  const scoreInput = form.elements.score;

  const newData = {
    user: userInput.value.trim(),
    score: scoreInput.value,
  };

  const result = addNewInput(newData);
  form.reset();

  result.then((data) => {
    if (data === 'Leaderboard score created correctly.') {
      successMsg.innerHTML = 'The score has been added successfully';
      successMsg.classList.add('success');
      setTimeout(() => {
        successMsg.classList.remove('success');
      }, 2000);
    } else {
      successMsg.innerHTML = 'Input field should not be empty. Please try again';
      successMsg.classList.add('error');
      setTimeout(() => {
        successMsg.classList.remove('error');
      }, 2000);
    }
  });
});

refreshButton.addEventListener('click', getListOfInputs);
