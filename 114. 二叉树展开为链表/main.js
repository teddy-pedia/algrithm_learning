/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (root == null) return null

    flatten(root.left)
    flatten(root.right)

    // 后序位置进行节点操作
    // 1. 将左子树作为右子树
    let left = root.left
    let right = root.right
    root.left = null
    root.right = left
    // 2. 将原先右子树拼接到当前右子树的右端
    let p = root
    while (p.right != null) {
        // 遍历到叶子节点
        p = p.right
    }
    p.right = right
}
