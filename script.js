'use strict';

/* DOM Manipulation to connect our code to user interface */
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//Const variable declared with an initial value that is randomized between 1 and 20 using the math.random * 20 + 1 and rounding to a whole number using math.trunc
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Score initialized at 20
let score = 20;
//High score initialized at 0
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector(
    '.label-highscore'
  ).textContent = `🥇 Highscore: ${highscore}`;
  document.querySelector('.highscore').textContent = score;
  /*
    //When the 'Again!' button is pressed, the integrated reload function will reload the page, therefore restarting the game.
    //Lazy function...
  window.location.reload();
    */
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //Where there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Input a real number!';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    //Background color becomes green to indicate a win
    //CamelCase must be used when changing an attribute with two words
    document.querySelector('body').style.backgroundColor = '#60b347';
    //When changing values, strings must be used, and units must be referenced from CSS and correctly linked from HTML
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.label-highscore').textContent =
        'New High Score!';
    }

    //When guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    //When guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
