/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const map = new Map([
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I'],
    ])

    const strArr = []
    while (num !== 0) {
        // 遍历map，找出小于且最接近num的值
        for (let [key, value] of map) {
            if (num >= key) {
                num -= key
                strArr.push(value)
            }
        }
    }
    return strArr.join('')
}

// test
let num = 3
console.log(intToRoman(num))
num = 4
console.log(intToRoman(num))
num = 9
console.log(intToRoman(num))
num = 58
console.log(intToRoman(num))
num = 1994
console.log(intToRoman(num))
