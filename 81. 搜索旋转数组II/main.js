/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let low = 0,
        high = nums.length - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (nums[mid] === target) {
            return true
        }
        if (nums[low] === nums[mid]) {
            low++
            continue
        }
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else if (nums[mid] <= nums[high]) {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return false
}

console.log(search([5, 1, 3], 3))
