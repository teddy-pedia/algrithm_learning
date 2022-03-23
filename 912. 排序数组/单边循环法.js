/**
 * 快速排序实现
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    quickSort(nums, 0, nums.length - 1)
    return nums
}

function quickSort(nums, left, right) {
    // 如果子区间只有一个元素，无需进行排序
    if (right <= left) return
    let pivot = partition(nums, left, right)
    quickSort(nums, left, pivot - 1)
    quickSort(nums, pivot + 1, right)
}

function partition(nums, start, end) {
    let pivot = nums[end],
        mark = start
    for (let i = start; i <= end - 1; i++) {
        if (nums[i] < pivot) {
            ;[nums[i], nums[mark]] = [nums[mark], nums[i]]
            mark++ // 小于的区域增加1
        }
    }
    ;[nums[mark], nums[end]] = [nums[end], nums[mark]]
    return mark
}

const nums = [5, 2, 3, 1]
console.log(sortArray(nums))
