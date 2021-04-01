class Ship {
  constructor(itinerary) {
    this.passengers = 0;
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }
  setSail() {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

    if (currentPortIndex === itinerary.ports.length - 1) {
      throw new Error("End of itinerary reached");
    }

    this.currentPort.ships.splice(this, 1);
    this.previousPort = this.currentPort;
    this.currentPort = null;
  }
  dock() {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

    this.currentPort = itinerary.ports[previousPortIndex + 1];
    this.currentPort.addShip(this);
  }
}

module.exports = { Ship };