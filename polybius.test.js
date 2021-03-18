const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should encode the input to output as strings", () => {
    const input = "bat";
    const actual = polybius(input, (encode = true));
    expect(actual).to.be.a("string");
  });

  it("should  encode letters i or j to '42'", () => {
    const input = "injury";
    const actual = polybius(input, (encode = true));
    const expected = "423342542445";
    expect(actual).to.eql(expected);
  });

  it("should correctly decode '42' to '(i/j) and maintain spaces", () => {
    const input = "341145 3242";
    const actual = polybius(input, (encode = false));
    const expected = "say hi/j";
    expect(actual).to.eql(expected);
  });

  it("should ignore capitalization", () => {
    const input = "Bat";
    const actual = polybius(input, (encode = true));
    const expected = "211144";
    expect(actual).to.eql(expected);
  });

  it("should maintain spaces after encoding", () => {
    const input = "Say Hi";
    const actual = polybius(input, (encode = true));
    const expected = "341145 3242";
    expect(actual).to.eql(expected);
  });

  it("should return false if the length of numbers is odd ", () => {
    const input = "341145 324";
    const actual = polybius(input, (encode = false));
    const expected = false;
    expect(actual).to.eql(expected);
  });
});
