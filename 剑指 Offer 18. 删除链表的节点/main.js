/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    let cur = head,
        pre
    while (cur && cur.val !== val) {
        pre = cur
        cur = cur.next
    }
    if (cur === head) {
        // 要删除的是头结点
        head = head.next
    } else {
        pre.next = cur.next
        cur.next = null
    }
    return head
}
