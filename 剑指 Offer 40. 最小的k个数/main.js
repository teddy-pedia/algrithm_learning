/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    arr.sort((a, b) => a - b)
    return arr.slice(0, k)
}
;(arr = [3, 2, 1]), (k = 2)
console.log(getLeastNumbers(arr, k))
