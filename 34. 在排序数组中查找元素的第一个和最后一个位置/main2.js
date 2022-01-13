var searchRange = function (nums, target) {
    const leftIdx = findLeft(nums, target)
    const rightIdx = findRight(nums, target)
    return [leftIdx, rightIdx]
}

const findLeft = (nums, target) => {
    let left = 0,
        right = nums.length - 1
    while (left < right) {
        let mid = left + ((right - left) >> 1)
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] >= target) {
            right = mid
        }
    }
    return nums[left] === target ? left : -1
}

const findRight = (nums, target) => {
    let left = 0,
        right = nums.length - 1
    while (left < right) {
        let mid = left + ((right - left) >> 1) + 1
        if (nums[mid] <= target) {
            left = mid
        } else if (nums[mid] > target) {
            right = mid - 1
        }
    }
    return nums[right] === target ? right : -1
}

// test
let nums = [5, 7, 7, 8, 8, 10],
    target = 8
console.log(searchRange(nums, target))
