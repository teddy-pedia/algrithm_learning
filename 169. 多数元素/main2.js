/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // 摩尔投票
    let candidate = nums[0],
        count = 1
    for (let i = 1; i < nums.length; i++) {
        if (candidate === nums[i]) {
            count++
        } else {
            // 不相等，则count - 1，如果count为0则更换候选数
            count--
            if (count === 0) {
                candidate = nums[i]
                count = 1
            }
        }
    }
    return candidate
}

nums = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(nums))
