

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
    // if the time is at 0 : 00 end the timer
    if (time == -1) {
      fetch('https://inspirobot.me/api?generate=true', {
      method: 'GET'
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdown.innerHTML = `${minutes} : ${seconds}`;
    time--;
  }

 
    setInterval(updateTimer, 100)

})

