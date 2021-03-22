const { Port } = require("../src/Port");

describe("Port", () => {
  it("has a name", () => {
    const port = new Port("Dover");

    expect(port.name).toBe("Dover");
  });
  it("can have a ship added", () => {
    const port = new Port("Dover");
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });
});
