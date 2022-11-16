import './index.css';
import * as Utilities from './utilities.js';

const form = document.querySelector('.inputScores');
const refreshButton = document.querySelector('.refreshBtn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = form.element.user;
  const scoreInput = form.element.score;

  const newData = {
    user: userInput.value,
    score: scoreInput.value,
  };

  Utilities.addNewInput(newData);

  form.reset();
});

refreshButton.addEventListener('click', Utilities.getListOfInputs);

window.onload = () => {
  Utilities.getListOfInputs();
};