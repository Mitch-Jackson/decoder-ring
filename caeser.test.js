const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return correctly encoded message given input, shift , encode =true", () => {
    const input = "put";
    const shift = 2;
    const actual = caesar(input, shift, (encode = true));
    const expected = "rwv";
    expect(actual).to.eql(expected);
  });

  it("should return correctly decoded message given input, shift , encode = false", () => {
    const input = "rwv";
    const shift = 2;
    const actual = caesar(input, shift, (encode = false));
    const expected = "put";
    expect(actual).to.eql(expected);
  });

  it("should return false if the shift value = 0", () => {
    const input = "put";
    const shift = 0;
    const actual = caesar(input, shift, (encode = true));
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it("should return false if the shift value < -25", () => {
    const input = "put";
    const shift = -28;
    const actual = caesar(input, shift, (encode = true));
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it("should return false if the shift value > 25", () => {
    const input = "put";
    const shift = 28;
    const actual = caesar(input, shift, (encode = true));
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it("should return false if the shift value is not given", () => {
    const input = "put";
    const shift = undefined;
    const actual = caesar(input, shift, (encode = true));
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it("should return the same message regardless of capitalization", () => {
    const input = "Put";
    const shift = 2;
    const actual = caesar(input, shift, (encode = true));
    const expected = "rwv";
    expect(actual).to.eql(expected);
  });

  it("should wrap around the alphabet for shifts that go before a", () => {
    const input = "any";
    const shift = -1;
    const actual = caesar(input, shift, (encode = true));
    const expected = "zmx";
    expect(actual).to.eql(expected);
  });

  it("should wrap around the alphabet for shifts that go past z", () => {
    const input = "why";
    const shift = 2;
    const actual = caesar(input, shift, (encode = true));
    const expected = "yja";
    expect(actual).to.eql(expected);
  });

  it("should maintain spaces and nonalphabetic symbols in the message", () => {
    const input = "Put it down!";
    const shift = 2;
    const actual = caesar(input, shift, (encode = true));
    const expected = "rwv kv fqyp!";
    expect(actual).to.eql(expected);
  });
});
