/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 递归调用，每两个单元进行交换
 * 函数定义为两两交换节点
 * head连接交换完成的链表，next连接head
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head == null || head.next == null) return head
    let next = head.next
    head.next = swapPairs(next.next)
    next.next = head
    return next
}
