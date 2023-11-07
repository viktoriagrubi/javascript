function isAlphanumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}

function palindrome(str) {
  // Usuń znaki interpunkcyjne, spacje i zamień na małe litery
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Sprawdź, czy odwrócony ciąg jest taki sam jak oryginalny
  return str === str.split("").reverse().join("");
}

console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /- :) 0-0")); // true
console.log(palindrome("five|_/|four")); // false
