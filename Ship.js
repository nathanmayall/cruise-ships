class Ship {
  constructor(port) {
    this.currentPort = port || "Portsmouth";
    this.passengers = 0;
    this.journey = [];
  }
  setSail(newPort) {
    this.currentPort = newPort;
  }
}

module.exports = { Ship };
