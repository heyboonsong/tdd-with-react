const { translate } = require("./parser");
it("translates d to half a dev day", () => {
  expect(translate("d")).toEqual({ Dev: 0.5 });
});

it("translate D to one dev day", () => {
  expect(translate("D")).toEqual({ Dev: 1.0 });
});

it("translate dD to one and a half dev days", () => {
  expect(translate("dD")).toEqual({ Dev: 1.5 });
});

it("translate q to half a qa day", () => {
  expect(translate("q")).toEqual({ QA: 0.5 });
});

it("translate Q to one qa day", () => {
  expect(translate("Q")).toEqual({ QA: 1.0 });
});

it("translate qQ to one and half qa days", () => {
  expect(translate("qQ")).toEqual({ QA: 1.5 });
});

it("translate dddQ", () => {
  expect(translate("dddQ")).toEqual({ QA: 1, Dev: 1.5 });
});
