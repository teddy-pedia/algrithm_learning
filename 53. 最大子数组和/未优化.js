/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let res = nums[0],
        dp = new Array(nums.length).fill(nums[0])
    nums.forEach((x, i) => {
        if (i > 0) {
            dp[i] = Math.max(x + dp[i - 1], x)
            res = Math.max(res, dp[i])
        }
    })
    return res
}
