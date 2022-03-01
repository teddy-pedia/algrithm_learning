/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    if (n === 0) return s
    // 先将字符串转为字符数组
    const strArr = [].slice.call(s)
    for (let i = 0; i < n; i++) {
        strArr.push(strArr.shift())
    }
    return strArr.join('')
}

// ;(s = 'abcdefg'), (k = 2)
let s = 'lrloseumgh',
    k = 6
console.log(reverseLeftWords(s, k))
