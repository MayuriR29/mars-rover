class RoverPosition {
  constructor(xCordinate, yCoordinate, direction) {
    this.xCordinate = xCordinate;
    this.yCoordinate = yCoordinate;
    this.direction = direction;
  }

  turnLeft() {
    switch (this.direction) {
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
  turnRight() {
    switch (this.direction) {
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

  moveForward() { //consider plateau size,declare global variables for L,R,M
    switch (this.direction) {
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
        this.xCordinate = this.xCordinate + 1;
        break;
    }
    return this;
  }

  processEachInstruction(eachInstruction) {
    if (eachInstruction === "L") {
      this.turnLeft();
      return;
    } else if (eachInstruction === "R") {
      this.turnRight();
      return;
    } else if (eachInstruction === "M") {
      this.moveForward();
      return;
    }
    return this;
  }

  processAllInstructions(instructionsForRover) {
    instructionsForRover.forEach(eachInstruction => {
      this.processEachInstruction(eachInstruction);
    });
    return this;
  }
}

module.exports = RoverPosition;
