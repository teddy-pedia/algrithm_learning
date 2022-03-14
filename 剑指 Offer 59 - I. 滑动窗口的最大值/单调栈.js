/**
 * 单调非递增队列
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if (nums.length === 0) return []
    const res = [],
        queue = []
    // 未形成窗口
    for (let i = 0; i < k; i++) {
        // 如果新增的数nums[i] > queue的最后一个元素，则将元素出队
        while (queue.length > 0 && queue[queue.length - 1] < nums[i])
            queue.pop()
        queue.push(nums[i])
    }
    // 将queue首个元素添加到res
    res.push(queue[0])
    // 形成窗口后
    for (let i = k; i < nums.length; i++) {
        // 滑动前先删除即将不在滑动窗口内的元素，nums[i - k]是不在区间内的元素
        if (queue[0] == nums[i - k]) queue.shift()
        // 接着删除队列中比当前值小的值
        while (queue.length > 0 && queue[queue.length - 1] < nums[i])
            queue.pop()
        queue.push(nums[i])
        res.push(queue[0])
    }
    console.log(res)
    return res
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
    k = 3
maxSlidingWindow(nums, k)
