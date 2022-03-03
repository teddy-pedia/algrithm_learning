/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    if (nums.length < 2) return nums
    let left = 0,
        right = nums.length - 1
    // 左指针指向偶数时停止，开始移动右指针，指向奇数时停止
    // 如果此时left < right，则交换位置
    while (left < right) {
        while (nums[left] % 2 === 1) left++
        while (nums[right] % 2 === 0) right--
        if (left < right) [nums[left], nums[right]] = [nums[right], nums[left]]
    }
    console.log(nums)
    return nums
}

// nums = [1, 2, 3, 4]
nums = [2, 4, 6, 8, 10, 1, 3]
exchange(nums)
