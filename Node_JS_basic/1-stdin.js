// program that interacts with user

// displays the initial message
process.stdout.write('Welcome to Holberton School, what is your name?\r');

// listen for user inputs
process.stdin.on('data', (data) => {
  // trim any extra spaces/newlines
  const name = data.toString().trim();

  // displays the user input
  process.stdout.write(`Your name is: ${name}\r`);

  // close the stdin streams to end the program
  process.exit();
});

// listen for program to close
process.on('exit', () => {
  process.stdout.write('This important software is now closing\r');
});
