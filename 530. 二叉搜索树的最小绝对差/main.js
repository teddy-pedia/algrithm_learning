/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉搜索树的中序遍历是一个升序序列，考虑相邻两个元素的差值即可
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let res = Number.MAX_SAFE_INTEGER,
        pre = -1
    const dfs = (node) => {
        if (node == null) return
        dfs(node.left)
        if (pre === -1) {
            pre = node.val
        } else {
            res = Math.min(Math.abs(node.val - pre), res)
            pre = node.val
        }
        dfs(node.right)
    }
    dfs(root)
    return res
}
