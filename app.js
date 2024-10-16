const squares = document.querySelectorAll('.square')
let mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const pauseButton = document.querySelector('.pause')
const playButton = document.querySelector('.play')

const mole1 = document.querySelector('#mole1')
const mole2 = document.querySelector('#mole2')
const mole3 = document.querySelector('#mole3')
const mole4 = document.querySelector('#mole4')


let result = 0
let hitPosition
let currentTime = 60
let timerId = null
let gamePaused = false
let myAudio = document.querySelector("#audio")

function randomSquare() {
  if (!gamePaused) {

  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition && !gamePaused) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
  if (!gamePaused) {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }

}

}

let countDownTimerId = setInterval(countDown, 1000)

function pauseGame() {
  if (!gamePaused) {
    gamePaused = true
    clearInterval(timerId)
    clearInterval(countDownTimerId)
  }
}

function playGame() {
  if (gamePaused) {
    gamePaused = false
    moveMole()
    countDownTimerId = setInterval(countDown, 1000)
  }
}

function updateMainMole(event) {
  console.log(event.target.src)
  document.documentElement.style.setProperty("--moleChoice", `url(${event.target.src})`)
}

mole = document.querySelector('.mole')

mole1.addEventListener('click', updateMainMole)
mole2.addEventListener('click', updateMainMole)
mole3.addEventListener('click', updateMainMole)
mole4.addEventListener('click', updateMainMole)

pauseButton.addEventListener("click", pauseGame)
playButton.addEventListener("click", playGame)