/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let left = head,
        right = head
    // 先让right先走n步
    for (let i = 0; i < n; i++) {
        right = right.next
    }
    // 如果为null，则不用左右指针移动了，直接返回left的下一个节点
    if (right == null) {
        return left.next
    }
    // left和right同时移动
    while (right.next) {
        left = left.next
        right = right.next
    }
    // 删除节点，left.next指向需要删除的节点
    left.next = left.next.next
    return head
}
