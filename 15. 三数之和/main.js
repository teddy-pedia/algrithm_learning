/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const n = nums.length
    if (n < 3) return []
    const res = []
    // 排序
    nums.sort((a, b) => {
        return a - b
    })
    for (let i = 0; i < n - 2; i++) {
        // 跳过重复元素
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let j = i + 1, k = n - 1
        while (j < k) {
            let s = nums[i] + nums[j] + nums[k]
            if (s === 0) {
                res.push([nums[i], nums[j], nums[k]])
                // 移动j和k，跳过重复元素
                while (j < k && nums[j] === nums[j + 1]) j++
                while (j < k && nums[k] === nums[k - 1]) k--
                k--
                j++
            } else if (s < 0) {
                j++
            } else if (s > 0) {
                k--
            }
        }
    }
    return res
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
