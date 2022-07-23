const { add } = require("./function-addition");
describe("addition", () => {
  it("returns 5 when adding 2 and 3", () => {
    const a = 2,
      b = 3;
    const result = add(a, b);
    expect(result).toEqual(5);
  });

  it("returns 6 when adding 2 and 4", () => {
    const a = 2,
      b = 4;
    const result = add(a, b);
    expect(result).toEqual(6);
  });
  it("returns 7 when adding 3 and 4", () => {
    const a = 3,
      b = 4;
    const result = add(a, b);
    expect(result).toEqual(7);
  });
});
