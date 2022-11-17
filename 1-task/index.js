const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = () => {
  const tempFunc = (seconds) => {
    const hours = Math.floor((seconds / 60 / 60) % 24)
      .toString()
      .padStart(2, '0')
    const minutes = Math.floor((seconds / 60) % 60)
      .toString()
      .padStart(2, '0')
    const second = (seconds % 60).toString().padStart(2, '0')
    timerEl.textContent = hours + ' : ' + minutes + ' : ' + second
  }

  return (seconds) => {
    tempFunc(seconds)
    setInterval(() => {
      seconds = seconds + 1
      tempFunc(seconds)
    }, 1000)
  }
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  e.target.value = e.target.value.replace(/[^0-9\.]/g, '')
})

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value)

  animateTimer(seconds)

  inputEl.value = ''
})
