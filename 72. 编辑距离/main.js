/**
 * 动态规划，定义一个矩阵dp，dp[i][j]表示某个word所需要的操作数
 * 面对如下的矩阵
 *
 *      ''  r   o   s
 * ''   0   1   2   3
 * h    1
 * o    2
 * r    3
 * s    4
 * e    5
 *
 * 原词为horse，目标词为ros
 * dp[i-1][j-1]表示替换操作，即dp[1][1]为dp[0][0]替换一次得到
 * dp[i][j-1]表示添加操作，如dp[0][1]可以为dp[0][0]添加一个r得到
 * dp[i-1][j]表示删除操作，如dp[1][0]变为dp[0][0]为一次原词上的删除操作
 * dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
 *
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const m = word1.length,
        n = word2.length
    const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0))
    // 对第一行和第一列进行赋值
    for (let i = 1; i < m + 1; i++) {
        dp[i][0] = dp[i - 1][0] + 1
    }
    for (let k = 1; k < n + 1; k++) {
        dp[0][k] = dp[0][k - 1] + 1
    }
    // 对其他位置赋值
    for (let i = 1; i < m + 1; i++) {
        for (let k = 1; k < n + 1; k++) {
            if (word1[i - 1] === word2[k - 1]) {
                // 相等的时候，不需要操作
                dp[i][k] = dp[i - 1][k - 1]
            } else {
                dp[i][k] =
                    Math.min(dp[i - 1][k - 1], dp[i - 1][k], dp[i][k - 1]) + 1
            }
        }
    }
    // console.log(dp)
    return dp[m][n]
}

;(word1 = 'horse'), (word2 = 'ros')
;(word1 = 'intention'), (word2 = 'execution')
minDistance(word1, word2)
