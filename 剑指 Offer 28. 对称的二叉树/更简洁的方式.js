/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 如果根节点为空，则为true，否则则对左右侧子树进行遍历判断
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root == null) return true
    const recursive = (left, right) => {
        // 如果都为空，则返回true；如果有一个不为空，或者值不相等，则返回false
        if (left == null && right == null) return true
        if ((left == null && right != null) || (left != null && right == null))
            return false
        if (left.val !== right.val) return false
        // 递归遍历子树
        return (
            recursive(left.left, right.right) &&
            recursive(left.right, right.left)
        )
    }
    return recursive(root.left, root.right)
}
