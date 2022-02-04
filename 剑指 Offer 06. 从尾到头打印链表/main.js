/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    let arr = [],
        cur = head
    while (cur != null) {
        arr.unshift(cur.val)
        cur = cur.next
    }
    return arr
}
