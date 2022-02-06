/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // 当head为空，或者只有head一个节点的时候直接返回
    if (head == null || head.next == null) return head
    let cur = head,
        dummy = new ListNode()
    while (cur) {
        let node = new ListNode(cur.val)
        if (dummy.next) {
            node.next = dummy.next
            dummy.next = node
        } else {
            // 当为第一个插入节点
            dummy.next = node
        }
        cur = cur.next
    }
    return dummy.next
}
