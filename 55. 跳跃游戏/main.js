/**
 * 从最后一位开始往前跳，寻找之前某一个位置，能直接跳到当前位置的索引index
 * 如果找到了，则更新当前位置为这个index，继续重复，直到跳到起始位置0
 * 如果没有这样的位置满足要求，则返回-1
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let nextIndex = nums.length - 1
    while (nextIndex > 0) {
        nextIndex = findNextIndex(nums, nextIndex)
    }
    return nextIndex === 0 ? true : false
}

function findNextIndex(nums, curIndex) {
    for (let i = curIndex - 1; i >= 0; i--) {
        if (nums[i] + i >= curIndex) {
            return i
        }
    }
    return -1
}

// nums = [2, 3, 1, 1, 4]
nums = [3, 2, 1, 0, 4]
canJump(nums)
