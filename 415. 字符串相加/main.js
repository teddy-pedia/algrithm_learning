/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    const arr1 = num1.split(''),
        arr2 = num2.split('')
    let res = '',
        temp = 0
    while (arr1.length || arr2.length || temp) {
        temp += ~~arr1.pop() + ~~arr2.pop()
        res = (temp % 10) + res
        temp = Math.floor(temp / 10)
    }
    return res
}

const num1 = '456',
    num2 = '77'
console.log(addStrings(num1, num2))
