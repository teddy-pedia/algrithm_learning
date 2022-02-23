/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root == null) return []
    let res = []
    let queue = [root],
        stack = [],
        flag = true
    while (queue.length) {
        let curLen = queue.length
        let arr = []
        for (let i = 0; i < curLen; i++) {
            let node = queue.shift() // 出队
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            if (!flag) {
                // 需要把当前元素加入栈
                stack.push(node)
            } else {
                arr.push(node.val)
            }
        }
        // 如果栈不为空，出栈元素
        while (stack.length) {
            arr.push(stack.pop().val)
        }
        res.push(arr)
        flag = !flag
    }
    return res
}
