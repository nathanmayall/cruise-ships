const { Port } = require("./Port");

describe("Port", () => {
  it("has a name", () => {
    const newPort = new Port("Dover");

    expect(newPort.name).toBe("Dover");
  });
});
