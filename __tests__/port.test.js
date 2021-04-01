const { Port } = require("../src/Port");

describe("Port", () => {
  let port;

  beforeEach(() => {
    port = new Port("Dover");
  });

  it("has a name", () => {
    expect(port.name).toBe("Dover");
  });

  it("can have a ship added", () => {
    const ship = jest.fn();
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
});
