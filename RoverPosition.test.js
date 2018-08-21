const RoverPosition = require("./RoverPosition");

test("should return the position of rover 1,rover 2", () => {
  const rover1 = new RoverPosition(1, 2, "N", "LMLMLMLMM");
  const rover2 = new RoverPosition(3, 3, "E", "MMRMMRMRRM");

  const result = rover1.processAllInstructions("LMLMLMLMM".split(""));
  const result2 = rover2.processAllInstructions("MMRMMRMRRM".split(""));

  expect(result).toEqual({ xCordinate: 1, yCoordinate: 3, direction: "N" });
  expect(result2).toEqual({ xCordinate: 5, yCoordinate: 1, direction: "E" });
});
