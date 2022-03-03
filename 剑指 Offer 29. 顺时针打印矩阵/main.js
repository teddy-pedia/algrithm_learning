/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let m = matrix.length,
        n = m > 0 ? matrix[0].length : 0
    if (m === 0 || n === 0) return []
    // 定义l,r,t,b分别代表四个边界
    let res = [],
        l = 0,
        r = n - 1,
        t = 0,
        b = m - 1
    while (true) {
        // 从左往右
        for (let i = l; i < r + 1; i++) {
            res.push(matrix[t][i])
        }
        t++ // 顶部边界向下移动1
        if (t > b) break
        // 从上往下
        for (let i = t; i < b + 1; i++) {
            res.push(matrix[i][r])
        }
        r--
        if (r < l) break
        // 从右往左
        for (let i = r; i >= l; i--) {
            res.push(matrix[b][i])
        }
        b--
        if (b < t) break
        // 从下往上
        for (let i = b; i >= t; i--) {
            res.push(matrix[i][l])
        }
        l++
        if (l > r) break
    }
    console.log(res)
    return res
}

matrix = [
    [2, 5, 8],
    [4, 0, -1],
]
spiralOrder(matrix)
