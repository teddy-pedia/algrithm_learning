/**
 * 思路：
 * 对数组进行二分，找到有序的那一边，最小值为nums[left]，记录该值
 * 对无序的那一边进行二分，得到的数组依然是一边有序一边无序
 * 检查有序的部分，将最左侧的值nums[left]记录下来，该值和之前记录的值进行比较
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function (nums) {
//     let n = nums.length
//     if (n === 1) return nums[0]
//     let left = 0,
//         right = n - 1
//     let res = nums[0]
//     while (left < right) {
//         let mid = left + ((right - left) >> 1)
//         if (nums[left] < nums[mid]) {
//             // 有序区间
//             res = Math.min(res, nums[left])
//             left = mid + 1
//         } else if (nums[left] === nums[mid]) {
//             // 如果该区间只有一个值，则直接比较
//             res = Math.min(res, nums[left])
//             left = mid + 1
//         } else if (nums[left] > nums[mid]) {
//             // 无序区间
//             res = Math.min(res, findMin(nums.slice(left, mid + 1)))
//             left = mid + 1
//         }
//     }
//     // 当停止的时候，left === right，此时还有一个值nums[left]需要比较
//     res = Math.min(res, nums[left])
//     return res
// }

/**
 * 思路：
 * 对数组进行二分，找到有序的那一边，最小值为nums[left]，记录该值
 * 对无序的那一边进行二分，得到的数组依然是一边有序一边无序
 * 检查有序的部分，将最左侧的值nums[left]记录下来，该值和之前记录的值进行比较
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let n = nums.length
    if (n === 1) return nums[0]
    let res = nums[0]
    let left = 0,
        right = n - 1
    while (left < right) {
        let mid = left + ((right - left) >> 1)
        if (nums[left] < nums[mid]) {   // 左侧[left, mid]区间有序
            res = Math.min(res, nums[left])
            left = mid + 1
        } else if (nums[left] > nums[mid]) {    // 右侧[mid+1, right]区间有序
            right = mid
        } else if (nums[left] === nums[mid]) {  // 当相等时，比如只有两个数，left和mid重叠
            res = Math.min(res, nums[left])
            left = mid + 1
        }
    }
    res = Math.min(nums[left], res)
    return res
}

// test
console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([11, 13, 15, 17]))
console.log(findMin([1, 2]))
console.log(findMin([3, 1, 2]))
