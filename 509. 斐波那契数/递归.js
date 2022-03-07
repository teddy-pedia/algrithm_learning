/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const memo = new Array(n + 1).fill(undefined)
    return recur(memo, n)
}

function recur(memo, n) {
    if (n === 0 || n === 1) return n
    if (!memo[n]) {
        memo[n] = recur(memo, n - 1) + recur(memo, n - 2)
    }
    return memo[n]
}

console.log(fib(5))
