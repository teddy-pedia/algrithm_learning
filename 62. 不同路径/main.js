/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = new Array(m).fill(null).map(() => new Array(n).fill(0))
    // 从(0,0)到(i,0)和到(0,j)的路径都只有一条
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1
    }
    // 到(x,y)的路径和等于到(x-1, y)和到(x, y-1)的路径和
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    // console.log(dp[m - 1][n - 1])
    return dp[m - 1][n - 1]
}

uniquePaths(3, 7) // 28
