// const { Ship } = require("./Ship");
const { Port } = require("./Port");
const { Itinerary } = require("./Itinerary");

describe("Itinerary", () => {
  it("should contain objects of ports", () => {
    const portsmouth = new Port("Portsmouth");
    const southampton = new Port("Southampton");
    const expected = [{ name: "Portsmouth" }, { name: "Southampton" }];
    const itinerary = new Itinerary([portsmouth, southampton]);
    expect(itinerary.ports).toEqual(expected);
  });
});
