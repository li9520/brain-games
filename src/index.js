import readlineSync from 'readline-sync';

export default (description, getQuestion, getAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    console.log(`Question: ${getQuestion()}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getAnswer();
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
