/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @return {boolean}
 */
var isSubStructure = function (a, b) {
    if (a == null || b == null) return false
    // 如果是包含子树，或者a的左子树包含子树，或者a的右子树包含子树，则满足
    return (
        containSubTree(a, b) ||
        isSubStructure(a.left, b) ||
        isSubStructure(a.right, b)
    )
}

/**
 * 判断是否两树相同
 * 1. 如果node2遍历完而node1还未遍历完，则说明node2完全匹配上
 * 2. 如果node1遍历完而node2还未遍历完，则说明node2不能完全匹配node1
 * 3. 如果某个节点的值不同，也为匹配上
 * @param {TreeNode} node1
 * @param {TreeNode} node2
 */
function containSubTree(node1, node2) {
    // 需匹配的子树已经匹配完成
    if (node2 == null) return true
    // 子树尚未匹配完成，此时主树已经匹配越过叶子节点
    if (node1 == null) return false
    // 节点值不同
    if (node1.val !== node2.val) return false
    return (
        containSubTree(node1.left, node2.left) &&
        containSubTree(node1.right, node2.right)
    )
}
