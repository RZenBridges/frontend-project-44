import randomInt from './utils.js'

const isPrime = (number) => {
  if (number <= 1) {
    return false
  }

  const square_root_int = Math.trunc(number ** 0.5)
  for (let i = 2; i < square_root_int; i++) {
    if (number % i == 0) {
      return false
    }
  }
  return true
}

const generateGameContext = () => {
  const number = randomInt(1)
  let answer = isPrime(number) ? 'yes' : 'no'

  return {
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    question: number,
    answer: answer,
  }
}

export default generateGameContext
