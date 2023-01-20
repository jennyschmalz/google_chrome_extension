//import { Timer } from './Timer.js';
//console.log("This is a popup!");

document.addEventListener('DOMContentLoaded', (e) => {
  let input = window.prompt('Please enter time in minutes for timer:');
  input = parseInt(input);

  while (input <= 0 || !input) {
    input = window.prompt('Please enter time in minutes for timer:');
  }

  //console.log(input);

  const startingMinutes = input;
  let time = startingMinutes * 60;

  //const countdown = new Timer();
  const countdown = document.getElementById('countdown');

  const updateTimer = () => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdown.innerHTML = `${minutes} : ${seconds}`;
    time--;
  }

  setInterval(updateTimer, 1000);
})

