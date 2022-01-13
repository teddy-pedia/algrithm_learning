/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = -1,
        end = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            start = i
            end = i
            let k = i + 1
            while (k < nums.length) {
                if (nums[i] === nums[k]) {
                    end++
                    k++
                } else {
                    break
                }
            }
            break
        }
    }
    return [start, end]
}

let nums = [5, 7, 7, 8, 8, 10],
    target = 6
console.log(searchRange(nums, target))
