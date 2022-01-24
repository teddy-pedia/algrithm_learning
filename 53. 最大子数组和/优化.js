/**
 * 动态规划，f[i]表示以i索引为结尾的子数组的最大值
 * 如果f[i-1]+nums[i] > nums[i]，说明nums[i]有正向作用，则取f[i-1]+nums[i]，
 * 否则取nums[i]作为f[i]的值
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let res = nums[0],
        pre = 0
    nums.forEach((x, i) => {
        pre = Math.max(pre + x, x)
        res = Math.max(res, pre)
    })
    // console.log(res)
    return res
}

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// nums = [-2, 1]
maxSubArray(nums)
