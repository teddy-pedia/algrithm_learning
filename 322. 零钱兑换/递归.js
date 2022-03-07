/**
 * 自顶向下求解
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const memo = new Array(amount + 1)
    function dp(coins, amount) {
        // base case
        if (amount === 0) return 0
        if (amount < 0) return -1 // 无解
        if (memo[amount]) {
            // 查看备忘录，避免重复计算
            return memo[amount]
        }
        let res = Number.MAX_SAFE_INTEGER
        for (let coin of coins) {
            let sub = dp(coins, amount - coin)
            if (sub === -1) continue // 无解直接跳过
            res = Math.min(res, 1 + sub)
        }
        // 将结果添加到备忘录
        // 若res为初始值，表示一开始就无解
        memo[amount] = res === Number.MAX_SAFE_INTEGER ? -1 : res
        return memo[amount]
    }
    return dp(coins, amount)
}

let coins = [1, 2, 5],
    amount = 100
console.log(coinChange(coins, amount))
