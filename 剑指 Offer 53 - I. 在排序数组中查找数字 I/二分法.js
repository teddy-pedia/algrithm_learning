/**
 * 找出左右边界，分别为恰好小于target的索引以及恰好大于target的索引
 * 那么重复个数 = right - left - 1
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let leftIndex = findLeftBoundary(nums, target)
    let rightIndex = findRightBoundary(nums, target)
    return rightIndex - leftIndex - 1
}

/**
 * 寻找小于target的最大数的索引
 * @param {number[]} nums
 * @param {number} target
 */
function findLeftBoundary(nums, target) {
    let left = -1,
        right = nums.length
    while (left + 1 < right) {
        let mid = left + ((right - left) >>> 1)
        if (nums[mid] < target) left = mid
        else if (nums[mid] >= target) right = mid
    }
    return left
}

/**
 * 寻找大于target的最小数的索引
 * @param {number[]} nums
 * @param {number} target
 */
function findRightBoundary(nums, target) {
    let left = -1,
        right = nums.length
    while (left + 1 < right) {
        let mid = left + ((right - left) >>> 1)
        if (nums[mid] <= target) left = mid
        else if (nums[mid] > target) right = mid
    }
    return right
}

let nums = [5, 7, 7, 8, 8, 10],
    target = 6
console.log(search(nums, target))
