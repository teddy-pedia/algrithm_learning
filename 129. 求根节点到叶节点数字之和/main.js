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
 * @return {number}
 */
var sumNumbers = function (root) {
    const dfs = (node, val) => {
        if (node == null) return 0
        let curVal = val * 10 + node.val
        if (node.left == null && node.right == null) return val
        return dfs(node.left, curVal) + dfs(node.right, curVal)
    }
    return dfs(root, 0)
}
