

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
  const quoteDiv = document.querySelector('#quote');
  //quote.addClassName()

  const randomIndex = (obj) => {
    return Math.floor(Math.random() * Object.keys(obj).length);
  }

  const updateTimer = () => {
    // if the time is at 0 : 00 end the timer
    if (time == -1) {
      fetch('https://type.fit/api/quotes', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      quoteObj = data[randomIndex(data)];
      quote = quoteObj.text;
      quoteAuthor = quoteObj.author || 'anonymous';
      //quote = data[randomIndex(data)].text;
      console.log(`data: ${quote} ${quoteAuthor}`);
      // quoteDiv.innerHTML = `${quote} ${quoteAuthor}`;
      quoteDiv.innerHTML = `"${quote}" 
      
      \n -${quoteAuthor}`;
      bodyDiv.remove();
      //let timer = document.querySelector('#content');
      //timer.style.display = 'none';
      document.body.append(quoteDiv);
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

 
    const intervalID = setInterval(updateTimer, 100);

})

// Attempt to reopen new tab
// chrome.runtime.onInstalled.addListener((reason) => {
//   if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: "index.html"
//     });
//   }
// });