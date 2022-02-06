/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let cur1 = l1,
        cur2 = l2
    let head = new ListNode(),
        cur = head
    while (cur1 && cur2) {
        let node
        if (cur1.val < cur2.val) {
            node = new ListNode(cur1.val)
            cur1 = cur1.next
        } else {
            node = new ListNode(cur2.val)
            cur2 = cur2.next
        }
        cur.next = node
        cur = cur.next
    }
    // 把剩余的链表直接拼接上
    cur.next = cur1 ? cur1 : cur2
    return head.next
}
