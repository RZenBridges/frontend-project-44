import readlineSync from 'readline-sync'

const MIN = 1
const MAX = 100
const MAX_ROUNDS = 3

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) + min
}

const isEven = (number) => {
  return number % 2 === 0
}

const game = (name) => {
  let current_round = 1
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  while (current_round <= MAX_ROUNDS) {
    let number = randomInt(MIN, MAX)
    let answer = isEven(number) ? 'yes' : 'no'
    let guess = readlineSync.question(`Question: ${number}\nYour answer: `)

    if (guess.toUpperCase() == answer.toUpperCase()) {
      console.log('Correct!')
      current_round++
    } else {
      console.log(`'${guess}' is wrong answer ;(. Correct answer was '${answer}'.`)
      break
    }
  }

  if (current_round > MAX_ROUNDS) {
    console.log(`Congratulations, ${name}!`)
  } else {
    console.log(`Let's try again, ${name}!`)
  }
}

export default game
