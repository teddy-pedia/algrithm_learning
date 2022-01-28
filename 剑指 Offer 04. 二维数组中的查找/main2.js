/**
 * 从最下角元素开始，记为cur
 * cur > target, 则说明在当前行的上方，i--
 * cur < target, 则说明在当前列的右侧，j++
 * cur === target, 则返回true
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    const m = matrix.length - 1,
        n = matrix[0] ? matrix[0].length : 0
    let i = m,
        j = 0
    let cur = matrix[i] ? matrix[i][j] : undefined
    while (i >= 0 && j <= n && cur) {
        if (cur > target) {
            cur = matrix[--i] ? matrix[i][j] : undefined
        } else if (cur < target) {
            cur = matrix[i][++j] || undefined
        } else if (cur === target) {
            return true
        }
    }
    return false
}

// matrix = [
//     [1, 4, 7, 11, 15],
//     [2, 5, 8, 12, 19],
//     [3, 6, 9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30],
// ]
// matrix = []
matrix = [[5]]
target = -3
console.log(findNumberIn2DArray(matrix, target))
