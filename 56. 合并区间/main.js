/**
 * 排序，并使用双指针指向数组中需要合并的左右端点，合并完后左右指针同时
 * 指向右指针的下一个位置，重复之前的操作
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    // 首先进行排序
    intervals.sort((arr1, arr2) => arr1[0] - arr2[0])
    let res = []
    let left = 0,
        right = 0,
        max = intervals[right][1] // 需要合并区间的最大值
    while (right < intervals.length) {
        let min = intervals[left][0] // 需要合并区间的最小值
        // 如果下一个数组存在，且第一个数在[min,max]之间则该区间是需要合并
        if (intervals[right + 1] && intervals[right + 1][0] <= max) {
            max = Math.max(max, intervals[right + 1][1])
            right++
        } else if (!intervals[right + 1] || intervals[right + 1][0] > max) {
            // 此时进行合并
            res.push([min, max])
            if (!intervals[right + 1]) {
                // 已经到了最后一个
                break
            }
            right++
            max = intervals[right][1]
            left = right // 左右指针指向下一个位置
        }
    }
    // console.log(res)
    return res
}

// intervals = [
//     [2, 6],
//     [1, 3],
//     [15, 18],
//     [8, 10],
// ]
intervals = [
    [1, 4],
    [0, 2],
    [3, 5],
]
// intervals = [
//     [1, 4],
//     [2, 3],
// ]
merge(intervals)
