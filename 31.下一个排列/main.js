/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    if (nums.length === 1) return
    let i = nums.length - 2,
        j = nums.length - 1,
        k = nums.length - 1
    // 寻找nums[i] < nums[j]的升序对(i,j)
    while (i >= 0) {
        if (nums[i] >= nums[j]) {
            i--
            j--
        } else {
            break
        }
    }

    // 不是完全降序的情况
    if (i >= 0) {
        // 寻找nums[i] < nums[k]，i和k分别指向小数和大数
        while (nums[i] >= nums[k] && k >= j) {
            k--
        }
        // 交换nums[i]与nums[k]
        ;[nums[i], nums[k]] = [nums[k], nums[i]]
    }

    // 翻转[j:end)
    let rightNums = nums.slice(j).reverse()
    nums.splice(j, nums.length - j, ...rightNums)
}

// const nums = [1, 5, 1]
const nums = [5, 1, 1]
// const nums = [3, 2, 1]
nextPermutation(nums)
console.log(nums)
