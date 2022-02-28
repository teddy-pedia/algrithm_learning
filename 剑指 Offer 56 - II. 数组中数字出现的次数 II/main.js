/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const map = new Map()
    let res = undefined
    nums.forEach((num) => {
        if (!map.has(num)) {
            map.set(num, 1)
        } else {
            map.set(num, map.get(num) + 1)
        }
    })
    for (let key of map.keys()) {
        if (map.get(key) === 1) {
            res = key
            break
        }
    }
    return res
}
