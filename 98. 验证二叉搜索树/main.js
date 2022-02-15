/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 如果中序遍历当前的值大于之前的值，则是一颗二叉搜索树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let pre = Number.MIN_SAFE_INTEGER
    const dfs = (node) => {
        if (node == null) return true
        console.log(node.val)
        // 访问左子树
        let left = dfs(node.left)
        // 如果当前节点值小于之前的值，说明不满足，返回false
        if (node.val <= pre) return false
        // 更新节点值
        pre = node.val
        // 访问右子树
        let right = dfs(node.right)
        return left && right
    }
    return dfs(root)
}
