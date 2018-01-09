const destructuring =  require("../02_spread_destructuring.js");

test("Speed equal 5 and not 4", () => {
  const goFive = destructuring.go({ speed: 5 });
  expect(goFive).toEqual('speed= 5 hyperdrive: false frobnifier: true');
});
