/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let index = binarySearch(nums, target)
    let res = 0
    if (index > -1) {
        res++
        let left = index - 1,
            right = index + 1
        while (left >= 0) {
            if (nums[left] === target) {
                res++
                left--
            } else {
                break
            }
        }
        while (right <= nums.length - 1) {
            if (nums[right] === target) {
                res++
                right++
            } else {
                break
            }
        }
    }
    return res
}

function binarySearch(nums, target) {
    let left = 0,
        right = nums.length - 1
    while (left <= right) {
        let mid = left + ((right - left) >>> 1)
        if (nums[mid] === target) return mid
        else if (nums[mid] > target) right = mid - 1
        else if (nums[mid] < target) left = mid + 1
    }
    return -1
}
