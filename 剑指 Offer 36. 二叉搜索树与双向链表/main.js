/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * 中序遍历构建循环双向链表
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if (root == null) return null
    let pre = null,
        cur = null,
        head = null
    const recur = (node) => {
        if (node == null) return
        recur(node.left)
        cur = node
        if (pre == null) {
            // 此时cur为第一个节点，用head保存指针
            head = cur
        } else {
            pre.right = cur
            cur.left = pre
        }
        pre = cur
        recur(node.right)
    }
    // 构建双向链表
    recur(root)
    // 构建循环链表，head指向头结点，pre指向尾节点
    head.left = pre
    pre.right = head
    return head
}
