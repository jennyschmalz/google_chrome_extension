

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
  const bodyDiv = document.querySelector('#content');
  const quoteDiv = document.createElement('div');
  //quote.addClassName()


  const updateTimer = () => {
    // if the time is at 0 : 00 end the timer

    let imgURL;

    if (time == -1) {
      fetch('https://type.fit/api/quotes', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      quote = data[0].text;
      console.log(`data: ${quote}`);
      quoteDiv.innerHTML = quote;
      bodyDiv.append(quoteDiv);
    })
    .catch(error => console.error(error));
    clearInterval(intervalID);

    return;
  }

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdown.innerHTML = `${minutes} : ${seconds}`;
    time--;
  }

 
    const intervalID = setInterval(updateTimer, 500);

})

