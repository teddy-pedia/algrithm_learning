/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const m = grid.length,
        n = grid[0].length
    let count = 0
    const dfs = (r, c) => {
        if (!inArea(r, c, m, n)) return
        // 如果遍历过的陆地，则返回避免重复遍历
        if (grid[r][c] === '2' || grid[r][c] === '0') return
        grid[r][c] = '2'
        dfs(r + 1, c)
        dfs(r, c + 1)
        dfs(r - 1, c)
        dfs(r, c - 1)
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++
                dfs(i, j)
            }
        }
    }
    return count
}

const inArea = (r, c, m, n) => {
    return r >= 0 && r < m && c >= 0 && c < n
}

// test
const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
]
console.log(numIslands(grid))
