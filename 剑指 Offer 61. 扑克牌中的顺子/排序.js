/**
 * 先对数组进行排序，最大的牌为nums[4]，最小的牌为nums[zeros]，其中k为大小王0的数量
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    nums.sort((a, b) => a - b)
    let pre = -1,
        zeros = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 0) {
            zeros++
        } else if (nums[i] === nums[i + 1]) return false
    }
    return nums[nums.length - 1] - nums[zeros] < 5
}

// const nums = [1, 2, 3, 4, 5]
const nums = [0, 0, 1, 2, 6]
console.log(isStraight(nums))
