/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix[0].length
    let newMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n; k++) {
            newMatrix[k][n - 1 - i] = matrix[i][k]
        }
    }
    // 进行替换
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = newMatrix[i][j]
        }
    }
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
// matrix = [
//     [5, 1, 9, 11],
//     [2, 4, 8, 10],
//     [13, 3, 6, 7],
//     [15, 14, 12, 16],
// ]
console.log(rotate(matrix))
