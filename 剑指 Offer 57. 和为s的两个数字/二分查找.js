/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const res = []
    for (let i = 0; i < nums.length - 1; i++) {
        let x = target - nums[i]
        let index = binarySearch(nums, i, nums.length - 1, x)
        if (index > -1) {
            res.push(nums[i], nums[index])
            break
        }
    }
    return res
}

function binarySearch(nums, left, right, target) {
    let i = left - 1,
        j = right + 1
    while (i + 1 !== j) {
        let mid = i + ((j - i) >>> 1)
        if (nums[mid] < target) i = mid
        else if (nums[mid] >= target) j = mid
    }
    return nums[j] === target ? j : -1
}

let nums = [2, 7, 11, 15],
    target = 9
console.log(twoSum(nums, target))
