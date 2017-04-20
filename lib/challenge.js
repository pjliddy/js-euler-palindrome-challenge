'use strict'

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
// should return 872187

const doubleBasePalindromeSum = function (base1, base2, base3, upperLimit) {
  let result = 0

  for (let i = 1; i <= upperLimit; i++) {
    result += isPalindrome(base1, base2, base3, i)
  }

  return result
}

// find palindromes in base 2, base 8, and base 10 => returns 610
const isPalindrome = function (base1, base2, base3, i) {
  // if the first version (base 10) is a palindrome
  if (i.toString(base1) === i.toString(base1).split('').reverse().join('') &&
    i.toString(base2) === i.toString(base2).split('').reverse().join('') &&
    i.toString(base3) === i.toString(base3).split('').reverse().join('')) {
    return i
  }
  return 0
}

// const isPalindrome = function (base1, base2, i) {
//   // if the first version (base 10) is a palindrome
//   if (i.toString(base1) === i.toString(base1).split('').reverse().join('') &&
//     i.toString(base2) === i.toString(base2).split('').reverse().join('')) {
//     return i
//   }
//   return 0
// }

module.exports = {
  doubleBasePalindromeSum,
  isPalindrome
}
