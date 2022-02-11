/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root == null) return []
    // cur表示当前层的剩余节点数，next表示下一层节点数
    let cur = 1,
        next = 0
    const queue = [root],
        res = []
    let temp = []
    while (queue.length) {
        let node = queue.shift()
        cur-- // 当前层遍历数-1
        if (node) {
            if (node.left) {
                queue.push(node.left)
                next++
            }
            if (node.right) {
                queue.push(node.right)
                next++
            }
            temp.push(node.val)
        }
        // 如果当前层cur为0，则说明遍历当前层结束
        if (!cur) {
            res.push(temp)
            temp = []
            cur = next
            next = 0
        }
    }
    return res
}
