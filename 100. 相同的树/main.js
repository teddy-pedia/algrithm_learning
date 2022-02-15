/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let flag = true
    const dfs = (nodep, nodeq) => {
        if (nodep == null && nodeq == null) {
            return
        }
        if (
            (nodep == null && nodeq != null) ||
            (nodep != null && nodeq == null)
        ) {
            flag = false
            return
        }
        if (nodep.val !== nodeq.val) {
            flag = false
            return
        }
        dfs(nodep.left, nodeq.left)
        dfs(nodep.right, nodeq.right)
    }
    dfs(p, q)
    return flag
}
