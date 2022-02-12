/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 进行逆中序遍历，遍历到第k个节点，则为倒数第k大节点
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    let res = null
    const dfs = (node) => {
        if (node == null) return
        dfs(node.right)
        k--
        if (k === 0) {
            res = node.val
            return
        }
        dfs(node.left)
    }
    dfs(root)
    return res
}
