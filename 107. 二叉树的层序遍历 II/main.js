/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 可以自顶向下进行层序遍历，将结果添加到数组尾部
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (root == null) return []
    const queue = [root]
    let res = []
    while (queue.length) {
        let curLen = queue.length
        let arr = []
        for (let i = 0; i < curLen; i++) {
            let node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            arr.push(node.val)
        }
        res.unshift(arr)
    }
    return res
}
