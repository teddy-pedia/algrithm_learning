/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const build = (postRoot, inStart, inEnd) => {
        if (inStart > inEnd) return null
        let root = new TreeNode(postorder[postRoot])
        let inRoot = -1
        // 找到根节点在中序遍历中的索引
        for (let i = 0; i < inorder.length; i++) {
            if (inorder[i] === postorder[postRoot]) {
                inRoot = i
                break
            }
        }
        // root.left = build(postRoot - 1 - (inEnd - (inRoot + 1) + 1), inStart, inRoot - 1)
        root.left = build(postRoot - 1 - inEnd + inRoot, inStart, inRoot - 1)
        root.right = build(postRoot - 1, inRoot + 1, inEnd)
        return root
    }
    return build(postorder.length - 1, 0, inorder.length - 1)
}
