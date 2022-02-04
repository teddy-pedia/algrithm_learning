/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    return quickSort(nums, 0, nums.length - 1)
}

function quickSort(array, left, right) {
    if (left >= right) return
    let index = partition_from_left(array, left, right)
    quickSort(array, left, index - 1)
    quickSort(array, index + 1, right)
    return array
}

/**
 * 单边循环
 * @param {numbers[]} array
 * @param {number} left
 * @param {number} right
 */
function partition_from_left(array, left, right) {
    const pivot = array[left] // 以left索引元素为pivot
    let mark = left
    // 遍历所有元素，当遍历的元素小于基准元素时，mark+1，表示小于的那部分数多一个
    // 并交换mark对应元素和当前遍历元素
    for (let i = left; i <= right; i++) {
        if (array[i] < pivot) {
            mark++
            ;[array[i], array[mark]] = [array[mark], array[i]]
        }
    }
    // 交换pivot和mark位置的元素
    array[left] = array[mark]
    array[mark] = pivot
    return mark
}

function partition(array, left, right) {
    const pivot = array[left + ((right - left) >> 1)]
    let i = left,
        j = right
    while (i <= j) {
        while (array[i] < pivot) i++
        while (array[j] > pivot) j--
        // 如果i<=j说明有array[i]与array[j]需要交换位置
        if (i <= j) {
            ;[array[i], array[j]] = [array[j], array[i]]
            i++
            j--
        }
    }
    return i
}

nums = [2, 0, 2, 1, 1, 0]
console.log(sortColors(nums))
