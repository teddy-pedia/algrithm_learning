/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
    let res = undefined
    let arr = []
    for (let i = 0; i < n; i++) arr.push(i)
    const recur = (nums, k, index) => {
        if (nums.length === 1) {
            res = nums[0]
            return
        }
        let deleteIndex = (index + k - 1) % nums.length
        let newArr = [
            ...nums.slice(0, deleteIndex),
            ...nums.slice(deleteIndex + 1),
        ]
        recur(newArr, k, deleteIndex)
    }
    recur(arr, m, 0)
    console.log(res)
    return res
}

let n = 70866,
    m = 116922
lastRemaining(n, m)
