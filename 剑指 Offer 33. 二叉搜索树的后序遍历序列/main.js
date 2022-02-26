/**
 * 从左往右遍历划分子树
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    if (postorder.length <= 1) return true
    const recur = (left, right) => {
        // 只有一个节点，不用判断
        if (left >= right) return true
        let p = left
        while (postorder[p] < postorder[right]) p++
        let m = p // 此时postorder[m]为第一个大于根节点的元素
        // 判断右子树是否都大于根节点
        while (postorder[m] > postorder[right]) m++
        let ret = m === right // 如果m和right相等，说明右子树满足要求
        return ret && recur(left, m - 1) && recur(m, right - 1)
    }
    return recur(0, postorder.length - 1)
}
