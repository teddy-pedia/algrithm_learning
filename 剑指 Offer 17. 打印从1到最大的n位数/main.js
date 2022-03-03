/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let res = []
    let m = Math.pow(10, n)
    console.log(m)
    for (let i = 1; i < m; i++) res.push(i)
    return res
}

printNumbers(3)
