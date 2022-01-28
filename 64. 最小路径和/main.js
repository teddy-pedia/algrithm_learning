/**
 * dp[i][j]表示从(0,0)到(i,j)的距离和，其中有
 * dp[i][0] = dp[i-1][0] + grid[i][0]
 * dp[0][j] = dp[0][j-1] + grid[0][j]
 * dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length,
        n = grid[0].length
    dp = new Array(m).fill(null).map(() => new Array(n).fill(0))
    dp[0][0] = grid[0][0]
    // 先填充第一行和第一列的数据
    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i]
    }
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }
    console.log(dp[m - 1][n - 1])
    return dp[m - 1][n - 1]
}

grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
]
grid = [
    [1, 2, 3],
    [4, 5, 6],
]
minPathSum(grid)
