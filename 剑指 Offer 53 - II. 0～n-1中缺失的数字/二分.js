/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let left = -1,
        right = nums.length
    while (left + 1 < right) {
        let mid = left + ((right - left) >>> 1)
        // 当mid的值等于mid时，说明左侧不缺失值
        if (nums[mid] === mid) left = mid
        // 当mid的值不等于mid时，说明左侧缺失值
        else if (nums[mid] !== mid) right = mid
    }
    // left为不缺失值的数组的最右边界，right则为缺失值的索引，也就是缺失值
    return right
}
