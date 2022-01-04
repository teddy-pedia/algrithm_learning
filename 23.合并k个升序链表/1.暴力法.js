/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const k = lists.length
    const arr = []
    lists.forEach(head => {
        let cur = head
        while(cur) {
            arr.push(cur.val)
            cur = cur.next
        }
    })
    arr.sort((a, b) => {
        return a - b
    })
    let dummy = new ListNode(null)
    let cur = dummy
    arr.forEach(curVal => {
        let temp = new ListNode(curVal)
        cur.next = temp
        cur = cur.next
    })
    return dummy.next
};
