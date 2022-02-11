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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root == null) return true
    const recur = (left, right) => {
        if (left == null && right == null) return true
        else if (
            (left == null && right != null) ||
            (left != null && right == null)
        )
            return false
        else if (left.val !== right.val) return false
        return recur(left.left, right.right) && recur(left.right, right.left)
    }
    return recur(root.left, root.right)
}
