/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 1) return nums[0]
    const n = nums.length
    let res = nums[0]
    let sum_arr = new Array(n)
        .fill(null)
        .map(() => new Array(n).fill(Number.MIN_SAFE_INTEGER))
    for (let i = 0; i < n; i++) {
        sum_arr[i][i] = nums[i]
        for (let j = i + 1; j < n; j++) {
            sum_arr[i][j] = sum_arr[i][j - 1] + nums[j]
        }
    }
    sum_arr.forEach((sub_arr) =>
        sub_arr.forEach((num) => {
            if (num > res) res = num
        })
    )
    console.log(res)
    return res
}

// nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
nums = [-2, 1]
maxSubArray(nums)
