import readlineSync from 'readline-sync'

const greetings = () => {
  const name = readlineSync.question('May I have yout name? ')
  console.log(`Hello, ${name}!`)
};

export default greetings;
