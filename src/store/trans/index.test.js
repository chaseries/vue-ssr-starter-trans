import trans from "./index";
const { mutations, actions } = trans;

describe("mutations.show", () => {
  it("Shows the current item.", () => {
    const state = { state: false };
    mutations.show(state);
    expect(state.state).toBe(true);
  });
});

describe("mutations.hide", () => {
  it("Hides the current item", () => {
    const state = { state: true };
    mutations.hide(state);
    expect(state.state).toBe(false);
  });
});

describe("mutations.triggerInitFlag", () => {
  it("Triggers the init flag", () => {
    const state = { initFlag: false };
    mutations.triggerInitFlag(state);
    expect(state.initFlag).toBe(true);
  });
});

describe("mutations.setTransCurrent", () => {
  it("Sets the  current transition object", () => {
    const state = { transCurrent: {} };
  });
});

describe("mutations.setTransDefault", () => {
  it("Sets the default transition object", () => {
    const state = { transDefault: {} };
  });
});
