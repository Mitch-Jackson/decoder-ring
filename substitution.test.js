const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  it("should return false if the given alphabet isn't 26 letters long", () => {
    const input = "hungry";
    const alphabet = "asdfghklmnopensy";
    const actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.be.false;
  });
  it("should correctly translate the given phrase per the given alphabet", () => {
    const input = "thisissecret";
    const alphabet = "poiuytrewqlkjhgfdsamnbvcxz";
    const actual = substitution(input, alphabet, (encode = true));
    const expected = "mewawaayisym";
    expect(actual).to.deep.equal(expected);
  });

  it("should return false if there are any duplicate characters in the alphabet", () => {
    const input = "shari";
    const alphabet = "ajadkfritnyugsmfnwparufnkg";
    const actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.be.false;
  });

  it("should  maintain spaces and puctuation during encoding", () => {
    const input = "This is secret.";
    const alphabet = "poiuytrewqlkjhgfdsamnbvcxz";
    const actual = substitution(input, alphabet, (encode = true));
    const expected = "mewa wa ayisym.";
    expect(actual).to.deep.equal(expected);
  });

  it("should  maintain spaces and puctuation during decoding", () => {
    const input = "mewa wa ayisym.";
    const alphabet = "poiuytrewqlkjhgfdsamnbvcxz";
    const actual = substitution(input, alphabet, (encode = false));
    const expected = "this is secret.";
    expect(actual).to.deep.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input = "This is secret.";
    const alphabet = "poiuytrewqlkjhgfdsamnbvcxz";
    const actual = substitution(input, alphabet, (encode = true));
    const expected = "mewa wa ayisym.";
    expect(actual).to.deep.equal(expected);
  });
});
