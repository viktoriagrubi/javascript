function rot13(str) {
  // Define a function to decode a single character
  function decodeChar(char) {
    if (/[A-Z]/.test(char)) {
      const charCode = char.charCodeAt(0);
      const decodedCharCode = charCode < 78 ? charCode + 13 : charCode - 13;
      return String.fromCharCode(decodedCharCode);
    }
    return char; // Non-alphabetic characters are not transformed
  }

  // Use the decodeChar function to decode each character in the string
  const decodedArray = str.split("").map(decodeChar);

  // Join the decoded characters back into a string
  return decodedArray.join("");
}

// Test the function with the provided examples
console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // Output: "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); // Output: "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // Output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
