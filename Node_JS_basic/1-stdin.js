// program tha interacts with user

// displays the initial msg
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// listen for user inputs
process.stdin.on('data', (data) => {
  // take away extra spaces/newlines
  const name = data.toString().trim();

  // displays the user input
  process.stdout.write(`Your name is: ${name}\n`);

  // close the stdin streams to end the program
  process.exit();
});

// listen for program to close
process.on('exit', () => {
  console.log('This important software is now closing\r');
});
