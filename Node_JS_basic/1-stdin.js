// program that interacts with user

// displays the initial message
process.stdout.write('Welcome to Holberton School, what is your name?\r');

// listen for user input
process.stdin.on('data', (data) => {
  // Trim any extra spaces/newlines
  const name = data.toString().trim();

  // Display the user input
  process.stdout.write(`Your name is: ${name}\r`);

  // ensure we wait a brief moment to handle child process cleanup properly
  setTimeout(() => {
    // close the stdin stream to end the program
    process.exit();
  }, 100);
});

// listen for the program to close
process.on('exit', () => {
  console.log('This important software is now closing\r');
});
