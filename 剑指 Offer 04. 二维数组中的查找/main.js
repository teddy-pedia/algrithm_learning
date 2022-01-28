/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    let res = false
    const binarySearch = (arr, x) => {
        let left = 0,
            right = arr.length - 1
        while (left <= right) {
            let mid = left + ((right - left) >> 1)
            if (arr[mid] === x) {
                return true
            } else if (arr[mid] < x) {
                left = mid + 1
            } else if (arr[mid] > x) {
                right = mid - 1
            }
        }
        return false
    }
    // 遍历每一行，二分查找寻找是否能找到target
    for (let arr of matrix) {
        if (binarySearch(arr, target)) {
            return true
        }
    }
    return res
}

matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
]
target = 20
console.log(findNumberIn2DArray(matrix, target))
