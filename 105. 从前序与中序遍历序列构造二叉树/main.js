/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const map = new Map()
    inorder.forEach((num, index) => map.set(num, index))

    /**
     * 递归构建树，返回树的根节点
     * @param {number} pre_root 前序数组中根节点索引
     * @param {number} in_left 中序数组中左边界索引
     * @param {number} in_right 中序数组中右边界索引
     * @return {TreeNode} 返回根节点
     */
    const recurBuildTree = (pre_root, in_left, in_right) => {
        // 左边界超过右边界，返回null，如果相等则为叶子节点
        if (in_left > in_right) return null
        let root = new TreeNode(preorder[pre_root])
        let in_root = map.get(preorder[pre_root])
        root.left = recurBuildTree(pre_root + 1, in_left, in_root - 1)
        root.right = recurBuildTree(
            pre_root + 1 + in_root - in_left,
            in_root + 1,
            in_right
        )
        return root
    }

    return recurBuildTree(0, 0, inorder.length - 1)
}
