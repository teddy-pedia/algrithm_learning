/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    let res = []
    ;(function dfs(node) {
        if (node == null) return
        for (let child of node.children) {
            dfs(child)
        }
        res.push(node.val)
    })(root)
    return res
}
