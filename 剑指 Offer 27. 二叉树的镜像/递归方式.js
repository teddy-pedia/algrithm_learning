/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 二叉树镜像，由于二叉树左右进行交换，在递归遍历二叉树的时候
 * 可以进行先序遍历，即 操作根节点-遍历左子树-遍历右子树
 * 然后更改为 操作根节点-遍历右子树-遍历左子树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    const mirror = (node) => {
        if (node == null) return
        // 翻转左右节点
        let temp = node.right
        node.right = node.left
        node.left = temp
        // 递归遍历
        mirror(node.left)
        mirror(node.right)
    }
    mirror(root)
    return root
}
