const { Ship } = require("./Ship");

describe("Ship", () => {
  it("should have a starting port", () => {
    const nathShip = new Ship("portsmouth");

    const expected = "portsmouth";

    const result = nathShip.startingPort;

    expect(result).toEqual(expected);
  });
  it("starts with 0 passengers", () => {
    const nathShip = new Ship("portsmouth");

    const expected = 0;

    const result = nathShip.passengers;

    expect(result).toEqual(expected);
  });
});
