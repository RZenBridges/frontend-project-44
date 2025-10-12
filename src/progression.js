import randomInt from './utils.js'

const MAX_NUMBERS = 10

const createSequence = (max = MAX_NUMBERS) => {
  const starting_number = randomInt(1, 10)
  const step = randomInt(1, 10)
  let result = [starting_number]
  let current_number = starting_number

  for (let i = 0; i < max - 1; i++) {
    current_number += step
    result.push(current_number)
  }

  return result
}

const generateGameContext = () => {
  const sequence = createSequence(MAX_NUMBERS)
  const pick_idx = randomInt(0, MAX_NUMBERS - 1)
  const answer = sequence[pick_idx]
  sequence[pick_idx] = '..'

  return {
    description: 'What number is missing in the progression?',
    question: sequence.join(' '),
    answer: answer,
  }
}

export default generateGameContext
