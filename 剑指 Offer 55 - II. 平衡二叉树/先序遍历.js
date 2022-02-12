/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 平衡二叉树是左右子树最大深度差不超过1，那么如果树深可以表示为左右子树最大深度+1
 * 如果左右子树最大深度差 <= 1，则返回左右子树最大深度+1
 * 否则返回-1，表示不是平衡树
 * 当递归发现不是平衡树时，即可停止
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    // 如果为空节点则直接返回true
    if (root == null) return true
    // 如果有一个不是平衡树则返回false
    if (!(isBalanced(root.left) && isBalanced(root.right))) return false
    // 获取树的深度，等于左右子树最大深度+1
    const getDepth = (node) => {
        if (node == null) return 0
        return Math.max(getDepth(node.left), getDepth(node.right)) + 1
    }
    let leftDepth = getDepth(root.left),
        rightDepth = getDepth(root.right)
    return Math.abs(leftDepth - rightDepth) <= 1 ? true : false
}
