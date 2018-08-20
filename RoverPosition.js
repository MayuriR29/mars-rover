class RoverPosition {
  constructor(xCordinate, yCoordinate, direction, instructionsForRover) {
    this.xCordinate = xCordinate;
    this.yCoordinate = yCoordinate;
    this.direction = direction;
    this.instructionsForRover = instructionsForRover;
  }

  turnLeft(direction) {
    switch (direction) {
      case "N":
        this.direction = "W";
        break;
      case "W":
        this.direction = "S";
        break;
      case "S":
        this.direction = "E";
        break;
      case "E":
        this.direction = "N";
        break;
    }
    return this;
  }
  turnRight(direction) {
    switch (direction) {
      case "N":
        this.direction = "E";
        break;
      case "E":
        this.direction = "S";
        break;
      case "S":
        this.direction = "W";
        break;
      case "W":
        this.direction = "N";
        break;
    }
    return this;
  }

  moveForward(direction) {
    switch (direction) {
      case "N":
        this.yCoordinate = this.yCoordinate + 1;
        break;
      case "W":
        this.xCordinate = this.xCordinate - 1;
        break;
      case "S":
        this.yCoordinate = this.yCoordinate - 1;
        break;
      case "E":
        this.xCordinate = this.xCordinate - 1;
        break;
    }
    return this;
  }

  processEachInstruction(eachInstruction) {
    if (eachInstruction === "L") {
      this.turnLeft(this.direction);
      return;
    } else if (eachInstruction === "R") {
      this.turnRight(this.direction);
      return;
    } else if (eachInstruction === "M") {
      this.moveForward(this.direction);
      return;
    }
  }

  processAllInstructions(instructionsForRover) {
    // for all instrutions, call processInstruction();
    this.instructionsForRover = instructionsForRover.split("");
    console.log(this.instructionsForRover);
    this.instructionsForRover.forEach(eachInstruction => {
      this.processEachInstruction(eachInstruction);
    });
  }
}

const test = new RoverPosition(1, 2, "N", "LMLMLMLMM");
test.processAllInstructions("LMLMLMLMM");
console.log(test);
module.exports = RoverPosition;
