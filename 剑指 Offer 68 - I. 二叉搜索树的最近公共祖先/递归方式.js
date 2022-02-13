/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // 先确定p,q大小，默认p为小值，q为大值
    if (p.val > q.val) {
        let temp = p
        p = q
        q = temp
    }
    // 获取祖先节点，当p.val < node.val < q.val时，node为祖先节点
    // 如果node.val < p.val则遍历右子树，反之遍历左子树
    const getAncestor = (node, p, q) => {
        if (p.val <= node.val && q.val >= node.val) return node
        else if (p.val > node.val) return getAncestor(node.right, p, q)
        else if (q.val < node.val) return getAncestor(node.left, p, q)
    }
    return getAncestor(root, p, q)
}
