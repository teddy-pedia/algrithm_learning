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
    const dfs = (node1, node2) => {
        // 如果两个节点都为空，那必然是相同的
        if (node1 == null && node2 == null) return true
        // 如果一个为空，另一个不为空，那不相同
        if (node1 == null || node2 == null) return false
        // 如果两个节点值不同，也是不相同的
        if (node1.val !== node2.val) return false
        return dfs(node1.left, node2.left) && dfs(node1.right, node2.right)
    }
    return dfs(p, q)
}
