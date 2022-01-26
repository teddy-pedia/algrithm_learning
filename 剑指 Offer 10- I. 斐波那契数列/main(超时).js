/**
 * 超时
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let res = findRes(n)
    return res % (Math.pow(10, 9) + 7)
}

function findRes(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(44))
