/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * 递归方式
 * @param {TreeNode} root
 * @return {number[]}
 */
// const preorderTraversal = function (root) {
//     const res = []
//     const pre = root => {
//         if(!root) {
//             return
//         }
//         res.push(root.val)
//         pre(root.left)
//         pre(root.right)
//     }
//     pre(root)
//     return res
// };

/**
 * 显示创建栈的方式
 * 每遍历到一个节点，则返回的数组res将该节点的值加入，
 * 并且该节点入栈
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
    // 初始化数据
    const res = []
    const stack = []
    while (root || stack.length) {
        // 当root不为空，将root的值加入res中，root入栈，判断root的左孩子
        while (root) {
            res.push(root.val)
            stack.push(root)
            root = root.left
        }
        // 当root节点连接下来的左孩子入栈后，即最左侧的那一条链的节点都入栈后
        // 此时开始出栈，并判断右孩子是否存在，存在则将右孩子作为root节点重复执行以上操作
        root = stack.pop()
        root = root.right
    }
    return res
};
