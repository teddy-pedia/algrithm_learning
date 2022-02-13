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
    let res = null
    /* 
        深度优先遍历，如果node节点的子树中包含有p或者q则返回true，否则返回false
        返回true的情况是
    */
    const dfs = (node, p, q) => {
        if (node == null) return false
        let left = dfs(node.left, p, q)
        let right = dfs(node.right, p, q)
        /* 
            1. left和right都为true，则说明p和q异侧，node为公共祖先
            2. p或q为node的情况下，left或者right为true
        */
        if (
            (left && right) ||
            ((node.val == p.val || node.val == q.val) && (left || right))
        ) {
            res = node
        }
        // 返回存在判断结果，left或者right为true，或者node节点为p或者q时，返回true
        return left || right || node.val === p.val || node.val === q.val
    }
    dfs(root, p, q)
    return res
}
