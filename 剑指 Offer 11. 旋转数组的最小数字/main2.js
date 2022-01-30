/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let left = 0,
        right = numbers.length - 1
    while (left < right) {
        let mid = left + ((right - left) >> 1)
        if (numbers[mid] > numbers[right]) {
            // 左侧有序，则旋转点在右侧
            left = mid + 1
        } else if (numbers[mid] < numbers[right]) {
            // 右侧有序，旋转点在左侧
            right = mid
        } else if (numbers[mid] === numbers[right]) {
            // 无法判定旋转点在哪侧
            // 例如[1,0,1,1,1]，此时旋转点在mid=2的左侧
            // [1,1,1,0,1]，此时旋转点在mid=2的右侧
            // 需要缩小区间right = right - 1
            right--
        }
    }
    console.log(numbers[left])
    // 返回旋转点的值
    return numbers[left]
}

// nums = [3, 4, 5, 1, 2]
nums = [1, 3, 5]
minArray(nums)
