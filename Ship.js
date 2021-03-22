const Port = require("./Port");

class Ship {
  constructor(port) {
    this.originPort = port || new Port("Portsmouth");
    this.passengers = 0;
    this.journey = [];
    this.currentPort = port || new Port("Portsmouth");
  }
  setSail(newPort) {
    this.currentPort = newPort;
  }
}

module.exports = { Ship };
