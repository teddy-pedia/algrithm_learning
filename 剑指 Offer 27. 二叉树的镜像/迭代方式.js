/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 二叉树镜像，广度优先遍历的时候需要一个队列进行辅助
 * 首先将根节点入队，队不为空的时候出队，并将出队节点的左右节点入队
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    if (root == null) return null
    const queue = [root]
    while (queue.length) {
        let node = queue.shift()
        // 交换左右节点
        let temp = node.right
        node.right = node.left
        node.left = temp
        // 入队当前节点左右节点
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }
    return root
}
