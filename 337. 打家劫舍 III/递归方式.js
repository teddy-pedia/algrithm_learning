/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 纯递归方式
 * 如果root获取金币，则儿子节点不获取，孙子节点进行获取
 * 如果root不获取金币，则儿子节点可以获取，也可以不获取
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
    if (root == null) return 0
    let money = root.val
    if (root.left) {
        money += rob(root.left.left) + rob(root.left.right)
    }
    if (root.right) {
        money += rob(root.right.left) + rob(root.right.right)
    }
    return Math.max(money, rob(root.left) + rob(root.right))
}
