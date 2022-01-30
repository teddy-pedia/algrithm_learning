/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = new Map()
    nums.forEach((x) => {
        let count = map.get(x) ? map.get(x) : 0
        map.set(x, count + 1)
    })
    for (let key of map.keys()) {
        if (map.get(key) > nums.length / 2) {
            return key
        }
    }
}

nums = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(nums))
