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
    let cur = root
    while (cur) {
        if (p.val > cur.val) cur = cur.right
        else if (q.val < cur.val) cur = cur.left
        else break
    }
    return cur
}
