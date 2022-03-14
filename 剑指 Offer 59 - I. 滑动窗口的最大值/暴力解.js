/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if (nums.length === 0) return []
    let left = 0,
        right = left + k - 1
    let res = []
    while (right < nums.length) {
        let max = nums[left]
        for (let i = left; i <= right; i++) {
            max = Math.max(max, nums[i])
        }
        res.push(max)
        left++
        right++
    }
    return res
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
    k = 3
maxSlidingWindow(nums, k)
