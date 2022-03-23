/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // nums.sort((a, b) => b - a)
    quickSort(nums, 0, nums.length - 1)
    return nums[k - 1]
}

function quickSort(nums, left, right) {
    if (right <= left) return
    let pivot = partition(nums, left, right)
    quickSort(nums, left, pivot - 1)
    quickSort(nums, pivot + 1, right)
}

function partition(nums, start, end) {
    let mark = end,
        pivot = nums[start]
    for (let i = end; i >= start + 1; i--) {
        if (nums[i] <= pivot) {
            ;[nums[i], nums[mark]] = [nums[mark], nums[i]]
            mark--
        }
    }
    // 将pivot和mark对应元素交换，mark此时表示恰好大等于pivot的元素
    ;[nums[mark], nums[start]] = [nums[start], nums[mark]]
    return mark
}

let nums = [3, 2, 1, 5, 6, 4]
quickSort(nums, 0, nums.length - 1)
console.log(nums)
console.log(findKthLargest(nums, 2))
