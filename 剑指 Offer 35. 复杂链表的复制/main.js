/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null
    const map = new Map()
    let cur = head
    // 建立原节点-新节点映射
    while (cur) {
        map.set(cur, new Node(cur.val))
        cur = cur.next
    }
    cur = head
    // 对新节点添加next和random指针
    while (cur) {
        let node_in_new_list = map.get(cur)
        if (map.get(cur.next)) {
            node_in_new_list.next = map.get(cur.next)
        }
        if (map.get(cur.random)) {
            node_in_new_list.random = map.get(cur.random)
        }
        map.set(cur, node_in_new_list)
        cur = cur.next
    }
    return map.get(head)
}
