/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ])
    let res = 0
    for (let i = 0; i < s.length; i++) {
        let n1 = map.get(s[i])
        let n2 = map.get(s[i + 1]) || 0
        if (n1 < n2) {
            res += (n2 - n1)
            i++
        } else {
            res += n1
        }
    }
    return res
}

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('IX'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
