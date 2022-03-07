/**
 * 不考虑大小王，如果最大的数 - 最小的数 < 5则可以构成顺子，反之不行
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    const set = new Set()
    let max = 0,
        min = 14
    for (let num of nums) {
        if (num === 0) continue
        max = Math.max(max, num)
        min = Math.min(min, num)
        if (set.has(num)) return false
        set.add(num)
    }
    return max - min < 5
}

// const nums = [1, 2, 3, 4, 5]
const nums = [0, 0, 1, 2, 5]
console.log(isStraight(nums))
