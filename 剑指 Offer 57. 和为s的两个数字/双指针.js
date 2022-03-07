/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let left = 0,
        right = nums.length - 1
    let res = []
    while (left < right) {
        if (nums[left] + nums[right] < target) left++
        else if (nums[left] + nums[right] > target) right--
        else {
            res.push(nums[left], nums[right])
            break
        }
    }
    return res
}

let nums = [2, 7, 11, 15],
    target = 9
console.log(twoSum(nums, target))
