/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    const set = new Set()
    let res
    for (let num of nums) {
        if (set.has(num)) {
            res = num
            break
        } else {
            set.add(num)
        }
    }
    return res
}

nums = [2, 3, 1, 0, 2, 5, 3]
console.log(findRepeatNumber(nums))
