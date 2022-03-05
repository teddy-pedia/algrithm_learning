/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let res = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i
    }
    // 如果前n-1个数都存在，则缺失最后一个数
    return res > -1 ? res : nums.length
}

let nums = [0, 1, 2]
console.log(missingNumber(nums))
