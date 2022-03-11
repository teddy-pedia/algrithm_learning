/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 后序遍历顺序为 左 - 右 - 根，我们可以按照 left -> right的顺序入栈，
 * 并把node.val 添加到返回数组的最后，这样就可以保证 left -> right -> root的顺序
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    const res = [],
        stack = [root]
    while (stack.length) {
        const node = stack.pop()
        if (node == null) continue
        node.children && stack.push(...node.children)
        res.unshift(node.val)
    }
    return res
}
