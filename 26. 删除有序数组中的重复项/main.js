/**
 * 暴力解法
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//     if (nums == null || nums.length === 0)
//         return 0
//     let i = 1
//     while (i < nums.length) {
//         if(nums[i-1] === nums[i]) {
//             nums.splice(i, 1)
//         }else {
//             i++
//         }
//     }
//     return nums.length
// };
/**
 * 双指针
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums == null || nums.length === 0) {
        return 0
    }
    const n = nums.length
    let slow = 0, fast = 1
    while (fast < n) {
        if (nums[slow] !== nums[fast]) {
            nums[++slow] = nums[fast]
        }
        fast++
    }
    return slow + 1
}

const nums = [1, 1, 1, 2, 2, 2, 3, 3, 4, 5]
// const nums = [1, 1, 2]
console.log(removeDuplicates(nums))
console.log(nums)
