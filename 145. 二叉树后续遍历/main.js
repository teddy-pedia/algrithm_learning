/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归方式
 * @param {TreeNode} root
 * @return {number[]}
 */
// const postorderTraversal = function (root) {
//     const res = []
//     const pos = root => {
//         if(!root) {
//             return
//         }
//         pos(root.left)
//         pos(root.right)
//         res.push(root.val)
//     }
//     pos(root)
//     return res
// };

/**
 * 后续遍历迭代方式，采用双栈
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function (root) {
    if (!root) return []
    const res = []
    const stack1 = []
    const stack2 = []
    stack1.push(root)
    while (stack1.length) {
        root = stack1.pop()
        stack2.push(root)
        if (root.left) {
            stack1.push(root.left)
        }
        if (root.right) {
            stack1.push(root.right)
        }
    }
    while (stack2.length) {
        res.push(stack2.pop().val)
    }
    return res
}
