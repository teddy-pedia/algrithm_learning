/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let len1 = 1,
        len2 = 1,
        cur1 = headA,
        cur2 = headB
    // 首先找出两个链表的长度
    while (cur1) {
        len1++
        cur1 = cur1.next
    }
    while (cur2) {
        len2++
        cur2 = cur2.next
    }
    // 如果len1 > len2则cur1需要走len1 - len2步，然后开始一起向后
    // 移动指针，判断出现相同点则是第一个公共点
    ;(cur1 = headA), (cur2 = headB)
    if (len1 > len2) {
        for (let i = 0; i < len1 - len2; i++) {
            cur1 = cur1.next
        }
    } else {
        for (let i = 0; i < len2 - len1; i++) {
            cur2 = cur2.next
        }
    }
    while (cur1) {
        if (cur1 === cur2) {
            return cur1
        }
        cur1 = cur1.next
        cur2 = cur2.next
    }
    return null
}
