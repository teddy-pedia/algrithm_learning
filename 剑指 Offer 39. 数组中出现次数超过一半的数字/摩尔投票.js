/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = new Map()
    let res = nums[0],
        count = 1
    for (let i = 1; i < nums.length; i++) {
        if (res === nums[i]) count++
        else count--
        if (count === 0) {
            res = nums[i]
            count = 1
        }
    }
    return res
}

nums = [1, 2, 3, 2, 2, 2, 5, 4, 2]
console.log(majorityElement(nums))
