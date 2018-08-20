const getRoverPosition = require("./RoverPosition");

test.skip("should console the input", () => {
  const x = "5 5";
  const y = "1 2 N";
  const z = "LMLM";

  expect(getRoverPosition(x, y, z)).toBe(1);
});
