const two_sum = (nums, target) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let expect = target - nums[i]
        if (map.has(expect)) {
            return [map.get(expect), i]
        }
        map.set(nums[i], i)
    }
    return []
}
const arr = [7, 3, 3, 2, 4]
const target = 9
console.log(two_sum(arr, target))
