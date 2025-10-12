const MIN = 0
const MAX = 100

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b

const operators = ['+', '-', '*']
const operatorMap = {
  '+': add,
  '-': subtract,
  '*': multiply,
}

const generateGameContext = () => {
  let a = randomInt(MIN, MAX)
  let b = randomInt(MIN, MAX)
  let operator = operators[randomInt(0, operators.length - 1)]

  return {
    description: 'What is the result of the expression?',
    question: `${a} ${operator} ${b}`,
    answer: operatorMap[operator](a, b),
  }
}

export default generateGameContext
