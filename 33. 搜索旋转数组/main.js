/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums == null || nums.length === 0) {
        return -1
    }
    let low = 0,
        high = nums.length - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (nums[mid] === target) {
            return mid
        }
        // 如果左侧是有序数组
        if (nums[low] <= nums[mid]) {
            // target在左侧
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
            // 右侧是有序数组
        } else {
            // target在右侧
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 2))
