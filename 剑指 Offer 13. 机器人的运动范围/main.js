/**
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，
 * 它每次可以向左、右、上、下移动一格（不能移动到方格外），
 * 也不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
 * 但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    let ans = 0
    const visit = new Array(m).fill(null).map(() => new Array(n).fill(false))
    // x,y表示当前的坐标
    const dfs = (x, y) => {
        // 越界或者不能到达某个格子时，停止
        if (x < 0 || x >= m || y < 0 || y >= n || getSum(x, y) > k) {
            return
        } else if (visit[x][y]) {
            // 访问过
            return
        } else {
            // 设置当前访问标志位
            visit[x][y] = true
            ans++
        }
        // 对四个方向进行进一步探索
        dfs(x + 1, y)
        dfs(x - 1, y)
        dfs(x, y + 1)
        dfs(x, y - 1)
    }
    dfs(0, 0)
    console.log(ans)
    return ans
}

// 得到arr数组所有数的各个位的和，并返回
function getSum(...arr) {
    let s = 0
    arr.forEach((x) => {
        while (x) {
            let r = x % 10
            s += r
            x = Math.floor(x / 10)
        }
    })
    return s
}

// movingCount(2, 3, 1)
// movingCount(3, 1, 0)
movingCount(1, 2, 1)
