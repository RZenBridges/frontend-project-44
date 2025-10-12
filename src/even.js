import randomInt from './utils.js'

const isEven = (number) => {
  return number % 2 === 0
}

const generateGameContext = () => {
  let number = randomInt()
  return {
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    question: number,
    answer: isEven(number) ? 'yes' : 'no',
  }
}

export default generateGameContext
