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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (root == null) return false
    let res = false
    const dfs = (node, val) => {
        if (node == null) return 0
        let curVal = val + node.val
        if (node.left == null && node.right == null) {
            if (curVal === targetSum) res = true
            return
        }
        dfs(node.left, curVal)
        dfs(node.right, curVal)
    }
    dfs(root, 0)
    return res
}
