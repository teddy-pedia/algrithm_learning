/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = new Map()
    let res = nums[0]
    nums.forEach((x) => {
        map.set(x, map.get(x) ? map.get(x) + 1 : 1)
    })
    for (let key of map.keys()) {
        let v = map.get(key)
        if (v > nums.length / 2) {
            res = key
            break
        }
    }
    return res
}

nums = [1, 2, 3, 2, 2, 2, 5, 4, 2]
console.log(majorityElement(nums))
