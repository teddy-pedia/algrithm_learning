class ListNode {
    constructor(val, next) {
        this.val = val ? val : 0
        this.next = next ? null : next
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let res = new ListNode()
    let cur = res
    while (l1 || l2) {
        let val1 = l1 ? l1.val : Number.MAX_SAFE_INTEGER
        let val2 = l2 ? l2.val : Number.MAX_SAFE_INTEGER
        if (val1 > val2) {
            cur.next = l2
            l2 = l2.next
        } else {
            cur.next = l1
            l1 = l1.next
        }
        cur = cur.next
    }
    return res.next
}

/**
 *
 * @param {ListNode} l
 */
function listToString(l) {
    let res = '['
    while (l) {
        res += l.val + ', '
        l = l.next
    }
    res += ']'
    return res
}

function arrayToList(arr) {
    let res = new ListNode(-1)
    let cur = res
    for (let item of arr) {
        cur.next = new ListNode(item)
        cur = cur.next
    }
    return res.next
}

const l1 = arrayToList([1, 2, 3])
const l2 = arrayToList([1, 2, 5, 6, 7])
const l = mergeTwoLists(l1, l2)
console.log(listToString(l))
