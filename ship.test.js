const { Ship } = require("./Ship");

describe("ship", () => {
  it("should have a starting port", () => {
    const nathShip = new Ship("portsmouth");

    const expected = "portsmouth";

    const result = nathShip.startingPort;

    expect(result).toEqual(expected);
  });
});
