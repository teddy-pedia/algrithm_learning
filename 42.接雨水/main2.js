var trap = (height) => {
    const max_left = new Array(height.length).fill(0)
    const max_right = new Array(height.length).fill(0)
    let res = 0
    // 求出当前i左侧的墙的最大高度，更新max_left
    // 其中max_left[i] = Math.max(max_left[i-1],height[i-1])
    for (let i = 1; i < height.length - 1; i++) {
        max_left[i] = Math.max(max_left[i - 1], height[i - 1])
    }
    // 同理更新max_right
    for (let i = height.length - 2; i > 0; i--) {
        max_right[i] = Math.max(max_right[i + 1], height[i + 1])
    }
    // console.log('max_left:', max_left)
    // console.log('max_right:', max_right)
    for (let i = 1; i < height.length - 1; i++) {
        let min = Math.min(max_left[i], max_right[i])
        if (height[i] < min) {
            res += min - height[i]
        }
    }
    return res
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))
