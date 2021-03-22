const { Ship } = require("./Ship");

describe("Ship", () => {
  it("should have a starting port", () => {
    const nathShip = new Ship("Portsmouth");
    const expected = "Portsmouth";
    const result = nathShip.currentPort;

    expect(result).toEqual(expected);
  });
  it("defaults to Portsmouth if no port supplied", () => {
    const nathShip = new Ship();
    const expected = "Portsmouth";
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
  it("setSail moves to specified port", () => {
    const nathShip = new Ship("Portsmouth");
    nathShip.setSail("Southampton");
    const expected = "Southampton";
    const result = nathShip.currentPort;

    expect(result).toEqual(expected);
  });
});
