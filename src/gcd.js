import randomInt from './utils.js'

const gcd = (num1, num2) => {
  while (num2 != 0) {
    let holder = num1
    num1 = num2
    num2 = holder % num2
  }
  return num1
}

const generateGameContext = () => {
  let a = randomInt(1)
  let b = randomInt(1)

  return {
    description: 'Find the greatest common divisor of given numbers.',
    question: `${a} ${b}`,
    answer: gcd(a, b),
  }
}

export default generateGameContext
