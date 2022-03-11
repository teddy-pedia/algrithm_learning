/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 迭代时用栈保存节点，由于是先序遍历，访问顺序为 root - left - right
 * 即左右孩子出栈顺序保持left - right，那么入栈顺序则是right - left
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    const res = [],
        stack = [root]
    while (stack.length) {
        const node = stack.pop()
        if (node != null) {
            res.push(node.val)
            for (let i = node.children.length - 1; i >= 0; i--) {
                // 从右往左入栈，出栈的时候则保证了左->右的顺序
                stack.push(node.childNodes[i])
            }
        }
    }
    return res
}
