const polybiusModule = (function () {
    const polybiusSq = [
      ["a", "f", "l", "q", "v"],
      ["b", "g", "m", "r", "w"],
      ["c", "h", "n", "s", "x"],
      ["d", "i/j", "o", "t", "y"],
      ["e", "k", "p", "u", "z"],
    ];
  
    function isEven(input) {
      let sum = 0;
      input = input.split("");
      input.map((char) => {
        if (char != " ") {
          sum += 1;
        }
      });
      if (sum % 2 != 0) {
        return false;
      }
    }
    function decode(input) {
      let complete = isEven(input);
      if (complete === false) {
        return false;
      }
  
      let result = [];
      let holder = [];
      let column = [];
      let code = input.split("");
      let index1 = 0;
      let index2 = 0;
      let letter = "";
  
      for (let i = 0; i < code.length; i++) {
        if (code[i] === " ") {
          result.push(" ");
        } else {
          holder.push(parseInt(code[i]) - 1);
          if (holder.length === 2) {
            index1 = holder[0];
            index2 = holder[1];
            column = polybiusSq[index1];
            letter = column[index2];
            result.push(letter);
            holder = [];
          }
        }
      }
      console.log(result.join(""));
      return result.join("");
    }
  
    function polybius(input, encode = true) {
      let result = [];
      let letterCode = 0;
 
      if (encode === false) {
        return decode(input);
      }
  
      let char = "";
      let index = 0;
      input = input.toLowerCase();
      for (let i = 0; i < input.length; i++) {
        char = input.charAt(i);
        if (char === " ") {
          result.push(" ");
        }
        if (char === "i" || char === "j") {
          char = "i/j";
        }
  
        for (let j = 0; j < polybiusSq.length; j++) {
          if (polybiusSq[j].includes(char)) {
            index = polybiusSq[j].indexOf(char);
            letterCode = `${j + 1}${index + 1}`;
            result.push(letterCode);
          }
        }
      }
      return result.join("");
    }
    return {
      polybius,
    };
  })();
  
  module.exports = polybiusModule.polybius;
  
