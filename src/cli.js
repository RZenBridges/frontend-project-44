import readlineSync from 'readline-sync'

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const greet = () => {
  const name = capitalize(readlineSync.question('May I have yout name? '))
  console.log(`Hello, ${name}!`)
  return name
}

export default greet
