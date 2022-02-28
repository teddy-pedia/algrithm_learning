/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 层序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    if (root == null) return []
    const res = []
    const queue = [root]
    while (queue.length) {
        let curLen = queue.length
        for (let i = 0; i < curLen; i++) {
            let node = queue.shift()
            res.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return res
}
