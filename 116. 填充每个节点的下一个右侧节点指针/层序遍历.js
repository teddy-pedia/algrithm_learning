/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 采用层序遍历，将每一层的节点连接起来
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (root == null) return null
    const queue = [root]
    while (queue.length) {
        let levelLenght = queue.length
        for (let i = 0; i < levelLenght; i++) {
            let curNode = queue.shift()
            let nextNode = i === levelLenght - 1 ? null : queue.shift()
            // 将当前元素的左右指针入队
            if (curNode.left) queue.push(curNode.left)
            if (curNode.right) queue.push(curNode.right)
            // 添加当前节点的next指针指向后一个节点
            curNode.next = nextNode
            // 再让nextNode从头入队
            nextNode && queue.unshift(nextNode)
        }
    }
    return root
}
