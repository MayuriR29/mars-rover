const { getUserInput, rl } = require("./readline-helper");
const RoverPosition = require("./RoverPosition");

const main = async () => {
  const x = await getUserInput(
    "Specify the size of the Mars plateau (e.g. 5 5):"
  );
  console.log("x is", x);

  const y = await getUserInput(
    "Specify the initial coordinates and direction of the mars rover (e.g. 1 2 N):"
  );
  console.log("y is", y);
  const input = y.split(" ");
  console.log("input is", input);

  const z = await getUserInput(
    "Specify the instructions for the mars rover (e.g. LMLMLMLMM):"
  );
  console.log("z is", z);
  const instructions=z.split('');
  console.log('instructions',instructions);

  const roverPositionInput = new RoverPosition(input[0], input[1], input[2], instructions);
  const finalPosition =roverPositionInput.processAllInstructions(instructions)
  // TODO: include the functions that you've implemented for this kata
  console.log('finalPosition',finalPosition);
  console.log(
    "The final coordinates of the mars rover is: <replace with the output of your program>"
  );

  rl.close();
};

main();
