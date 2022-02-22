/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
    let res = []
    const map = new Map()
    /**
     * 后序遍历寻找相同子树，并进行序列化
     * @param {TreeNode} node
     */
    const dfs = (node) => {
        if (node == null) return '#'
        let left = dfs(node.left)
        let right = dfs(node.right)
        let subTree = left + ',' + right + ',' + node.val
        // map中如果有，则说明是重复的，如果value为1，则说明第一次重复
        // 此时将node添加到res中，如果次数不为1，则说明res已经添加过了
        if (map.has(subTree)) {
            if (map.get(subTree) === 1) {
                res.push(node)
            }
            map.set(subTree, map.get(subTree) + 1)
        } else {
            map.set(subTree, 1)
        }
        return subTree
    }
    dfs(root)
    return res
}
