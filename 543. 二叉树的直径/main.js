/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 采用后序遍历，从底向上得到每个节点左右子树的最大深度
 * 而树的最大路径，等于根节点左右子树最大深度之和
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let res = 0
    const maxDepth = (node) => {
        if (node == null) return 0
        let left = maxDepth(node.left)
        let right = maxDepth(node.right)
        // 最大直径等于左右子树最大深度之和
        res = Math.max(res, left + right)
        return 1 + Math.max(left, right)
    }
    maxDepth(root)
    return res
}
