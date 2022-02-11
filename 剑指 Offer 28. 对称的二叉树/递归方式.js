/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 如果先序遍历 根节点-左-右 与遍历方式 根节点-右-左 的结果相同
 * 则可以认为是对称的
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let arr1 = [],
        arr2 = []
    const dfs = (node) => {
        if (node == null) {
            arr1.push(null)
            return
        }
        arr1.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    const dfs_reverse = (node) => {
        if (node == null) {
            arr2.push(null)
            return
        }
        arr2.push(node.val)
        dfs_reverse(node.right)
        dfs_reverse(node.left)
    }
    dfs(root)
    dfs_reverse(root)
    console.log(arr1)
    console.log(arr2)
    // 判断arr1和arr2每个元素是否相同
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}
