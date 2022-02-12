/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) return 0
    let res = 1
    const dfs = (node, curLen) => {
        if (node == null) {
            res = Math.max(res, curLen)
            return
        }
        curLen++ // 当前访问到node不为空，则加1
        dfs(node.left, curLen)
        dfs(node.right, curLen)
    }
    dfs(root, 0)
    return res
}
