const startbtn = document.querySelector('.startbtn')
const mainTime = document.querySelector('.timeBtns')
const timeBtn = document.querySelectorAll('.timebtn')
const board = document.querySelector('.board')
const screenq = document.querySelector('.screen')
const beforegame = document.querySelector('.beforegame')
const timeEl = document.querySelector('#time')
let time = 0
let timeUp = 0
let score = 0
let forClear

startbtn.addEventListener('click', showTimeBtns)

function showTimeBtns() {
    startbtn.classList.add('op-0', 'curs-d')
    revealTimeBtns()
}

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        event.target.remove()
        createRandomCircle()
        score++
    }
})

function revealTimeBtns() {
    startbtn.removeEventListener('click', showTimeBtns)
    mainTime.classList.remove('op-0')
    for (const timebtn of timeBtn) {
        timebtn.classList.add('curs-p')
    }
    mainTime.addEventListener('click', event => {
        if (event.target.classList.contains('timebtn')) {
            time = parseInt(event.target.getAttribute('data-time'))
            timeUp = time
            beforegame.remove()
            startGame()
        }
    })
}

function startGame() {
    screenq.classList.add('op-1')
    
    forClear = setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
        clearInterval(forClear)
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame () {
    
    timeEl.parentNode.classList.add('op-0')
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
    
    const restart = document.createElement('button')
    restart.classList.add('restart-btn')
    restart.innerText = 'Restart'
    board.append(restart)
    restart.addEventListener('click', () => {
        timeEl.parentNode.classList.remove('op-0')
        board.innerHTML = ''
        restart.remove()
        score = 0
        time = timeUp
        startGame()
    })
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(20, 40)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    // const color = getRandomColor()
    
    circle.classList.add('circle')
    circle.style.backgroundColor = '#111'
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}