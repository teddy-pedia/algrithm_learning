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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
    let res = []
    const dfs = (node, target, path) => {
        if (node == null) return
        target -= node.val
        let curPath = [...path]
        curPath.push(node.val)
        // 叶子节点判断
        if (target === 0 && node.left == null && node.right == null) {
            res.push(curPath)
        }
        dfs(node.left, target, curPath)
        dfs(node.right, target, curPath)
    }
    dfs(root, target, [])
    return res
}
