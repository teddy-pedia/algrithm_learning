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
        path.push(node.val)
        // 叶子节点判断
        if (target === 0 && node.left == null && node.right == null) {
            res.push([...path])
        }
        dfs(node.left, target, path)
        dfs(node.right, target, path)
        path.pop() // 左右子树遍历结束后，弹出该节点
    }
    dfs(root, target, [])
    return res
}
