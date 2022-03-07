/**
 * 自底向上求解
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // 定义dp[i]表示金额为i时的最少所需硬币数
    const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
    // base case
    dp[0] = 0
    // 外层循环表示所有的金额可能
    for (let i = 0; i <= amount; i++) {
        // 内层循环遍历每种硬币，更新dp表
        for (let coin of coins) {
            // 无解，跳过
            if (i - coin < 0) continue
            dp[i] = Math.min(dp[i], 1 + dp[i - coin])
        }
    }

    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount]
}

let coins = [1, 2, 5],
    amount = 100
console.log(coinChange(coins, amount))
