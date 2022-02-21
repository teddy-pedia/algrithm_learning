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
var deleteDuplicates = function (head) {
    const set = new Set()
    let pre,
        cur = head
    while (cur) {
        if (set.has(cur.val)) {
            // 删除该节点，由于只有一个节点时不用删除，所以pre必然不为空
            pre.next = cur.next
            cur = cur.next
        } else {
            set.add(cur.val)
            pre = cur
            cur = cur.next
        }
    }
    return head
}
