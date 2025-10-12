import readlineSync from 'readline-sync'
import greet from './cli.js'

const MAX_ROUNDS = 3

const run = (game, rounds = MAX_ROUNDS) => {
  let current_round = 1
  let player = greet()

  while (current_round <= rounds) {
    let context = game()
    if (current_round == 1) {
      console.log(context.description)
    }

    let guess = readlineSync.question(`Question: ${context.question}\nYour answer: `)
    if (guess == context.answer) {
      console.log('Correct!')
      current_round++
    }
    else {
      console.log(`'${guess}' is wrong answer :(. Correct answer was '${context.answer}'.`)
      console.log(`Let's try again, ${player}!`)
      return
    }
  }
  console.log(`Congratulations, ${player}!`)
}

export default run
