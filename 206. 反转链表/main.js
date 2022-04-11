/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    const dummy = new ListNode()
    while (head) {
        let node = new ListNode(head.val)
        if (!dummy.next) {
            dummy.next = node
        } else {
            node.next = dummy.next
            dummy.next = node
        }
        head = head.next
    }
    return dummy.next
}
