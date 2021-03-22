const { Ship } = require("./Ship");
const { Port } = require("./Port");

describe("Ship", () => {
  it("should have a starting port", () => {
    const nathPort = new Port("Portsmouth");
    const nathShip = new Ship(nathPort);
    const expected = { name: "Portsmouth" };
    const result = nathShip.currentPort;

    expect(result).toEqual(expected);
  });
  it("defaults to Portsmouth if no port supplied", () => {
    const nathPort = new Port();
    const nathShip = new Ship(nathPort);
    const expected = { name: "Portsmouth" };
    const result = nathShip.currentPort;

    expect(result).toEqual(expected);
  });
  it("starts with 0 passengers", () => {
    const nathShip = new Ship("portsmouth");
    const expected = 0;
    const result = nathShip.passengers;

    expect(result).toEqual(expected);
  });
  it("starts with empty journey log", () => {
    const nathShip = new Ship("portsmouth");
    const expected = [];
    const result = nathShip.journey;

    expect(result).toEqual(expected);
  });
  it("setSail moves ship to specified port", () => {
    const nathShip = new Ship("Portsmouth");
    nathShip.setSail("Southampton");
    const expected = "Southampton";
    const result = nathShip.currentPort;

    expect(result).toEqual(expected);
  });
});
