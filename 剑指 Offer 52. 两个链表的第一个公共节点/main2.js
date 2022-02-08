/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 两个指针p1和p2，A长L1+C步，B长L2+C步，C为公共长度
 * 那么有p1走L1+L2+C步，等于p2走L1+L2+C步，到达了第一个公共点
 * 如果再次遍历到当前指针为null，则没有公共点，否则相等时即为公共点
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let p1 = headA,
        p2 = headB
    while (p1 !== p2) {
        p1 = p1.next ? p1.next : headB
        p2 = p2.next ? p2.next : headA
    }
    // 此时p1 === p2，要么为公共点，要么为null
    return p1
}
