/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    if (postorder.length <= 1) return true
    const recur = (left, right) => {
        // 只有一个节点，不用判断
        if (left >= right) return true
        let p = right - 1
        while (p >= left && postorder[p] > postorder[right]) p--
        let m = p // 此时postorder[m]为第一个小于根节点的元素
        // 判断左子树是否都小于根节点
        while (m >= left && postorder[m] < postorder[right]) m--
        let ret = m === left - 1 // 如果m和left-1相等，说明左子树满足要求
        return ret && recur(left, m) && recur(m + 1, right - 1)
    }
    return recur(0, postorder.length - 1)
}
