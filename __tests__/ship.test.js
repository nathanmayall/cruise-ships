const { Ship } = require("../src/Ship");
const { Port } = require("../src/Port");
const { Itinerary } = require("../src/Itinerary");

describe("Ship", () => {
  describe("with ports and itinerary", () => {
    let ship;
    let dover;
    let calais;
    let itinerary;
    beforeEach(() => {
      dover = new Port("Dover");
      calais = new Port("Calais");
      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary);
    });
    it("should have a starting port", () => {
      expect(ship.currentPort).toBe(dover);
    });
    it("starts with 0 passengers", () => {
      expect(ship.passengers).toBe(0);
    });
    it("can set sail", () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(dover.ships).not.toContain(ship);
    });
    it("can dock at a different port", () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toBe(calais);
      expect(calais.ships).toContain(ship);
    });
    it("can't sail further than its itinerary", () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });
  });
});
