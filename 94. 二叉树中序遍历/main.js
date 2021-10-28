/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 递归遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
// const inorderTraversal = function (root) {
//     const res = []
//     const inorder = root => {
//         if(!root)
//             return
//         inorder(root.left)
//         res.push(root.val)
//         inorder(root.right)
//     }
//     inorder(root)
//     return res
// };

/**
 * 显示创建栈进行遍历
 * 模拟递归过程，先将左节点入栈，直到左节点为空停止
 * 然后开始出栈，出栈检查右节点是否为空，若不为空则入栈
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
    const res = []
    const stack = []
    while(root || stack.length) {
        // 不断将节点及其左节点入栈
        while(root) {
            stack.push(root.val)
            root = root.left
        }
        // 入栈结束后，开始出栈
        let node = stack.pop()
        res.push(node.val)
        root = node.right
    }
    return res
};
