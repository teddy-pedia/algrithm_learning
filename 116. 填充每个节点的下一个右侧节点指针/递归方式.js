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
    const connectTwoNodes = (node1, node2) => {
        if (node1 == null || node2 == null) return
        // 前序位置对节点进行连接
        node1.next = node2
        // 连接这两个节点的左右节点
        connectTwoNodes(node1.left, node1.right)
        connectTwoNodes(node2.left, node2.right)
        // 连接跨父节点的子节点
        connectTwoNodes(node1.right, node2.left)
    }
    connectTwoNodes(root.left, root.right)
    return root
}
