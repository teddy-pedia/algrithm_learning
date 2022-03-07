/**
 * 动态规划，以数组第i个元素为结尾的子数组的值的最大值即是返回值
 * dp[i-1] > 0则说明dp[i-1]对当前nums[i]有正向作用，dp[i] = dp[i-1]+nums[i]
 * 否则取dp[i] = nums[i]
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let res = Number.MIN_SAFE_INTEGER,
        pre = 0
    const dp = new Array(nums.length).fill(0)
    nums.forEach((num, i) => {
        dp[i] = Math.max(pre + num, num)
        res = Math.max(res, dp[i])
        pre = dp[i]
    })
    return res
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
maxSubArray(nums)
