const MIN = 1
const MAX = 100

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) + min
}

const isEven = (number) => {
  return number % 2 === 0
}

const generateGameContext = () => {
  let number = randomInt(MIN, MAX)
  return {
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    question: number,
    answer: isEven(number) ? 'yes' : 'no',
  }
}

export default generateGameContext
