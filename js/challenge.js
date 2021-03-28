// As a user, I should see the timer increment every second once the page has loaded.
const timer = document.getElementById('counter')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const heartButton = document.getElementById('heart')
const numberLikes = document.querySelector('.likes')
const likedNumbers = {}
const pauseButton = document.getElementById('pause')
let paused = false
const submitButton = document.getElementById('submit')
const listComments = document.querySelector('.comments')
const comment = document.getElementById('comment-input')

function incrementTimer(){
    if (!paused){
        let newTimer = parseInt(timer.innerText)
        newTimer += 1
        timer.innerText = newTimer  
    }  
}

function decrementTimer(){
    if (!paused){
        let newTimer = parseInt(timer.innerText)
        newTimer -= 1
        timer.innerText = newTimer
    }
}

function autoIncrement(){
    setInterval(incrementTimer, 1000)
}

function manuallyIncrement(){
    plusButton.addEventListener('click', incrementTimer)
}

function manuallyDecrement(){
    minusButton.addEventListener('click', decrementTimer)
}

heartButton.addEventListener('click', likedNumber)

function likedNumber(){
    const currentNumber = timer.innerText
    if (likedNumbers[currentNumber]) {
        likedNumbers[currentNumber] += 1;
        document.getElementById(currentNumber).innerText = `${currentNumber} has been liked ${likedNumbers[currentNumber]} times`;
    } else {
        likedNumbers[currentNumber] = 1;
        numberLikes.innerHTML += `<li id=${currentNumber}>${currentNumber} has been liked ${likedNumbers[currentNumber]} times</li>`;
    }
}

pauseButton.addEventListener('click', handlePause)

function handlePause(){
    if (paused = !paused) {
        plusButton.disabled = true
        minusButton.disabled = true
        heartButton.disabled = true
        submitButton.disabled = true
        pauseButton.innerText = 'resume'
    } else {
        plusButton.disabled = false
        minusButton.disabled = false
        heartButton.disabled = false
        submitButton.disabled = false
        pauseButton.innerText = 'pause'
    }
}

// 5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
function submitComment(){
    submitButton.addEventListener('click', function(event){
        event.preventDefault()
        if (comment.value != ""){
            listComments.innerHTML += `<li>${comment.value}</li>`;
            comment.value = ""
        } else {
            alert('Cannot submit blank comment.');
        }
    })
}

autoIncrement()
manuallyIncrement()
manuallyDecrement()
submitComment()