var trap = (height) => {
    let res = 0
    // 左右两端不用考虑，必然不能积水，所以下标从1~height.length - 2
    for (let i = 1; i < height.length - 1; i++) {
        // 找出当前列左侧最高
        let max_left = 0
        for (let j = i - 1; j >= 0; j--) {
            if (height[j] > max_left) {
                max_left = height[j]
            }
        }
        // 找出当前列右侧最高
        let max_right = 0
        for (let j = i + 1; j < height.length; j++) {
            if (height[j] > max_right) {
                max_right = height[j]
            }
        }
        // 左右两侧墙的较小值
        let min = Math.min(max_left, max_right)
        // 计算当前是否能积水，当且仅当当前列高度小于min时，有积水
        if (height[i] < min) {
            res += min - height[i]
        }
    }
    return res
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))
