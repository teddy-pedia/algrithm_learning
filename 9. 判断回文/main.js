/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    let rev = 0
    let original = x
    if (x < 0) return false
    while (x !== 0) {
        let digit = x % 10
        rev = rev * 10 + digit
        x = ~~(x / 10)
    }
    return rev === original
};

console.log(isPalindrome(-101))
