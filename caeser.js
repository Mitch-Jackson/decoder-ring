const caesarModule = (function () {
    function caesar(input, shift, encode = true) {
      let message = "";
      if (shift === 0 || shift < -25 || shift > 25 || !shift) {
        return false;
      }
      if (encode === false) {
        shift = -shift;
      }
      input = input.toLowerCase();
  
      for (let i = 0; i < input.length; i++) {
        let char = input.charAt(i);
        if (char.match(/[a-z]/)) {
          char = char.charCodeAt(0);
          char = char + shift;
          if (char > 122) {
            char = char - 26;
          }
          if (char < 97) {
            char = char + 26;
          }
  
          char = String.fromCharCode(char);
        }
        message = `${message}${char}`;
      }
      return message;
    }
    return {
      caesar,
    };
  })();
  
  module.exports = caesarModule.caesar;
  
