/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let m = matrix.length,
        n = 0
    if (m > 0) n = matrix[0].length
    if (m === 0 || n === 0) return []
    const res = []
    let l = 0,
        r = n - 1,
        t = 0,
        b = m - 1
    while (true) {
        // 从左往右
        for (let i = l; i <= r; i++) res.push(matrix[t][i])
        t++
        if (t > b) break
        // 从上往下
        for (let i = t; i <= b; i++) res.push(matrix[i][r])
        r--
        if (l > r) break
        // 从右往左
        for (let i = r; i >= l; i--) res.push(matrix[b][i])
        b--
        if (t > b) break
        // 从下往上
        for (let i = b; i >= t; i--) res.push(matrix[i][l])
        l++
        if (l > r) break
    }
    return res
}
