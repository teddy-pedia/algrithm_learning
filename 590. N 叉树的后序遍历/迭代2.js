/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 后序遍历顺序为 left -> right -> root，我们可以按照 root -> right -> left的顺序
 * 把值添加到数组，在进行一次翻转数组
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    const res = [],
        stack = [root]
    while (stack.length) {
        const node = stack.pop()
        if (node == null) continue
        res.push(node.val)
        node.children && stack.push(...node.children)
    }
    return res.reverse()
}
