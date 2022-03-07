/**
 * 动态规划是自底向上进行递推，知道base case下的n == 0 和n == 1的值
 * 开始递推n == 2, 3, 4...
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0 || n === 1) return n
    const dp = [0, 1]
    for (let i = 2; i <= n; i++) {
        dp.push(dp[0] + dp[1])
        dp.shift()
    }
    return dp[1]
}
