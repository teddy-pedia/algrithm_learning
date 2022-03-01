/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(),
        carry = 0,
        cur1 = l1,
        cur2 = l2
    let cur = dummy
    while (cur1 || cur2 || carry > 0) {
        let cur1Val = cur1 ? cur1.val : 0,
            cur2Val = cur2 ? cur2.val : 0
        let originVal = cur1Val + cur2Val + carry
        cur.next = new ListNode(originVal % 10)
        // 判断是否进位
        carry = originVal >= 10 ? 1 : 0
        // 更新指针
        cur = cur.next
        if (cur1) {
            cur1 = cur1.next
        }
        if (cur2) {
            cur2 = cur2.next
        }
    }
    return dummy.next
}
