/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归方式实现
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    const dfs = (node, min, max) => {
        // 如果节点为空，则返回true
        if (node == null) return true
        // 当节点值小等于最小值，或者节点值大等于最大值，则不满足
        if (node.val <= min) return false
        if (node.val >= max) return false
        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
    }
    return dfs(root, -Infinity, Infinity)
}
