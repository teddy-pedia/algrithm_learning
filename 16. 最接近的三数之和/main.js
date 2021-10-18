/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if (nums.length === 3) return nums[0] + nums[1] + nums[2]
    let res
    let min = Infinity
    // 首先进行数组排序
    nums.sort((a, b) => {
        return a - b
    })
    for (let i = 0; i < nums.length - 2; i++) {
        let base = nums[i]
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            let sum = base + nums[left] + nums[right]
            let diff = Math.abs(sum - target)
            if (diff < min) {
                min = diff
                res = sum
            }
            if (sum < target) {
                left++
            } else if (sum > target) {
                right--
            } else if (sum === target) {
                return res
            }
        }
    }
    return res
}
console.log(threeSumClosest([-1, 2, 1, -4], 1))
