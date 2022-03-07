/**
 * 动态规划是自底向上进行递推，知道base case下的n == 0 和n == 1的值
 * 开始递推n == 2, 3, 4...
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const dp = new Array(n + 1).fill(undefined)
    ;(dp[0] = 0), (dp[1] = 1)
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}
