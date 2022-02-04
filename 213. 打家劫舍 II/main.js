/**
 * 循环排列的房屋，环首和环尾只有一个能偷，那么可以看成两个单排
 * 一个单排dp1选择偷第一个房屋，最后一个不偷
 * 另一个单排dp2选择第一个不偷，最后一个偷
 * 最后比较取 max(dp1, dp2)
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) return nums[0]
    const dp1 = new Array(nums.length - 1).fill(0)
    const dp2 = new Array(nums.length - 1).fill(0)

    dp1[0] = nums[0]
    dp1[1] = Math.max(nums[0], nums[1])
    dp2[0] = nums[1]
    dp2[1] = Math.max(nums[1], nums[2])

    for (let i = 2; i < nums.length - 1; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i])
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i + 1])
    }
    return Math.max(dp1[nums.length - 2], dp2[nums.length - 2])
}

nums = [1, 2, 3]
nums = [1, 2, 3, 1]
nums = [2, 3, 2]
nums = [1, 3, 1, 3, 100]
console.log(rob(nums))
