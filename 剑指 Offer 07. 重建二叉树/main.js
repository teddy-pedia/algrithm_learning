/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 根据中序遍历确定左右子树长度，然后在前序遍历中进行划分
 * 分为 根节点 - 左子树 - 右子树
 * 假设根节点在前序遍历索引为root，那么左子树的根节点为root+1，右子树根节点
 * 可以根据左子树区间长度length来确定，即root + 1 + length
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const map = {}
    // 将中序遍历的节点按照 ’节点 - 索引‘保存到map中
    inorder.forEach((num, index) => (map[num] = index))

    /**
     * 构建二叉树
     * @param {number} root_index 根节点在前序遍历的索引
     * @param {number} left 中序遍历左边界
     * @param {number} right 中序遍历右边界
     * @returns {TreeNode} root
     */
    function buildTree(root_index, left, right) {
        // 左边界大于右边界时，说明已经越过了叶子节点，返回null
        // 当left === right时，表示为叶子节点
        if (left > right) return null
        // 获取根节点
        let root = new TreeNode(preorder[root_index])
        // 根节点在中序遍历中的索引
        let index = map[preorder[root_index]]
        root.left = buildTree(root_index + 1, left, index - 1)
        // 左子树区间长度为index - 1 - left + 1 = index - left
        // 所以root_index + 1 + index - left表示右子树的根节点的索引
        root.right = buildTree(root_index + 1 + index - left, index + 1, right)
        return root
    }

    return buildTree(0, 0, inorder.length - 1)
}
