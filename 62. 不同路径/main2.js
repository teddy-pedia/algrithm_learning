/**
 * 超时
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let res = 0
    // 定义x为横坐标，y为纵坐标，起始点为(m,n)，终点为(1,1)
    // 只有向左或者向上移动，即移动到(x-1,y)或者(x,y-1)
    const dfs = (x, y) => {
        if (x === 1 || y === 1) {
            res++
            return
        }
        dfs(x - 1, y) // 向上移动
        dfs(x, y - 1) // 向左移动
    }
    dfs(m, n)
    console.log(res)
    return res
}

uniquePaths(51, 9) // 28
