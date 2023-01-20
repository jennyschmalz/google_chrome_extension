//creating the PopUp
let popUp = document.createElement('div');
popUp.innerHTML = 'How long do you want to spend here? <input size=10 type=number> </input><button id=submitButton> Submit </button>';

//PopUp Styling
popUp.style.visibility = 'visible';
popUp.style.width = '160px';
popUp.style.backgroundColor = 'grey'
popUp.style.color = 'black'
popUp.style.textAlign = 'center';
popUp.style.borderRadius = '6px';
popUp.style.padding = '8px 0';
popUp.style.position = 'absolute'
popUp.style.zIndex = 1;
popUp.style.bottom = '0';
popUp.style.left = 'center';
popUp.style.marginLeft = '0px';
document.querySelector('body').appendChild(popUp);

//Event Listener that grabs time user wants to set and starts timer

document.querySelector('button').addEventListener('click', function(){
    let maxTimeField = document.querySelector('#maxTime');
    let maxTimeSetByUser = document.querySelector('input').value;
    maxTimeField.innerHTML = `${maxTimeSetByUser} minutes`;
    popUp.style.visibility = 'hidden';
    timer(0)
})

//function that runs the timer: will increase the time and check if it
function timer(currentTime){
    setTimeout(() => {
        currentTime++
        if (currentTime === Number(document.querySelector('input').value)){
            console.log('times up!')
        } else {
        console.log(currentTime);
        timer(currentTime);
        }
    }, 1000);   
}