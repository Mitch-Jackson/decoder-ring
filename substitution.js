const substitutionModule = (function () {
    function hasDuplicates(array) {
      return new Set(array).size === array.length;
    }
  
    function substitution(input, alphabet, encode = true) {
      const alpha = "abcdefghijklmnopqrstuvwxyz";
      let result = [];
      let pos = Number;
      let letr = "";
  
      
      if (!alphabet) {
        return false;
      }
      if (alphabet.length < 26 || alphabet.length > 26) {
        return false;
      }
      let isDuplicate = hasDuplicates([...alphabet]);
      if (isDuplicate === false) {
        return false;
      }
  
      input = input.toLowerCase();
      alphabet = alphabet.toLowerCase();
  
      //encoding
      if (encode === true) {
        for (let i = 0; i < input.length; i++) {
          letr = input.charAt(i);
          pos = alpha.indexOf(letr);
          if (pos > -1) {
            letr = alphabet.charAt(pos);
            result.push(letr);
          } else {
            result.push(letr);
          }
        }
      }
  
      //decoding
      if (encode === false) {
        for (let i = 0; i < input.length; i++) {
          letr = input.charAt(i);
          pos = alphabet.indexOf(letr);
          if (pos > -1) {
            letr = alpha.charAt(pos);
            result.push(letr);
          } else {
            result.push(letr);
          }
        }
      }
      return result.join("");
    }
    return {
      substitution,
    };
  })();
  
  module.exports = substitutionModule.substitution;
