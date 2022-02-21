/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 设置一个前置指针pre，接着是需要交换的元素node1,node2
 * 设置pre.next = node2, node1.next = node2.next, node2.next = node1来交换位置
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let pre = new ListNode()
    pre.next = head
    let temp = pre
    while (temp.next != null && temp.next.next != null) {
        let node1 = temp.next,
            node2 = temp.next.next
        // 进行交换
        temp.next = node2
        node1.next = node2.next
        node2.next = node1
        temp = node1
    }
    return pre.next
}
