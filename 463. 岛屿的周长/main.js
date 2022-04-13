/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let m = grid.length,
        n = grid[0].length
    const dfs = (r, c) => {
        if (!inArea(r, c)) return 1

        if (grid[r][c] === 0) return 1
        if (grid[r][c] === 2) return 0

        grid[r][c] = 2

        return dfs(r + 1, c) + dfs(r, c + 1) + dfs(r - 1, c) + dfs(r, c - 1)
    }
    const inArea = (r, c) => {
        return r >= 0 && r < m && c >= 0 && c < n
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return dfs(i, j)
            }
        }
    }
}

const grid = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
]
console.log(islandPerimeter(grid))
