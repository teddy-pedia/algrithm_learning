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
    // 递归得到子树的深度
    const getDepth = (node) => {
        // 边界条件，如果当前节点为空，则返回0
        if (node == null) return 0
        // 如果左右子树返回-1，则说明不是平衡树，返回-1
        let left = getDepth(node.left)
        if (left === -1) return -1
        let right = getDepth(node.right)
        if (right === -1) return -1
        // 判断深度差是否小等于1，如果满足，则返回深度，否则返回-1
        return Math.abs(left - right) <= 1 ? Math.max(left, right) + 1 : -1
    }
    return getDepth(root) != -1
}
