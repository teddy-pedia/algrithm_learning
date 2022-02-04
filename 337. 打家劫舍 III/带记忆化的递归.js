/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 带记忆化的递归方式
 * 如果root获取金币，则儿子节点不获取，孙子节点进行获取
 * 如果root不获取金币，则儿子节点可以获取，也可以不获取
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
    const memo = new Map()
    /**
     *
     * @param {*} root
     * @param {Map} memo
     * @returns
     */
    const robInternal = (root, memo) => {
        if (root == null) return 0
        if (memo.has(root)) {
            // 如果已经缓存了，则直接返回
            return memo.get(root)
        }
        let money = root.val
        if (root.left) {
            money +=
                robInternal(root.left.left, memo) +
                robInternal(root.left.right, memo)
        }
        if (root.right) {
            money +=
                robInternal(root.right.left, memo) +
                robInternal(root.right.right, memo)
        }
        // 缓存当前节点可以打劫的最大金额
        let res = Math.max(
            money,
            robInternal(root.left, memo) + robInternal(root.right, memo)
        )
        memo.set(root, res)
        return res
    }
    return robInternal(root, memo)
}
