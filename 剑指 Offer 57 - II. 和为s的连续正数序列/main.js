/**
 * 设连续正整数序列的左边界 i 和右边界 j ，则可构建滑动窗口从左向右滑动。
 * 循环中，每轮判断滑动窗口内元素和与目标值 target 的大小关系，
 * 若相等则记录结果，若大于 target 则移动左边界 i （以减小窗口内的元素和），
 * 若小于 target 则移动右边界 j （以增大窗口内的元素和）。
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    let res = []
    let left = 1,
        right = 2,
        sum = left + right
    while (left < right) {
        if (sum > target) {
            sum -= left
            left++
        } else if (sum < target) {
            right++
            sum += right
        } else if (sum === target) {
            let temp = []
            for (let i = left; i <= right; i++) {
                temp.push(i)
            }
            // 左端往右移动，寻找新的左边界
            sum -= left
            left++
            res.push(temp)
        }
    }
    return res
}

console.log(findContinuousSequence(9))
