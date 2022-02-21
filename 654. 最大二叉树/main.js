/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    /**
     *
     * @param {number[]} nums
     * @param {*} left
     * @param {*} right
     * @returns
     */
    const recur = (nums, left, right) => {
        if (nums.length === 0) return null
        // 找出最大值
        let max = Number.MIN_SAFE_INTEGER,
            max_index = -1
        nums.forEach((num, index) => {
            if (num > max) {
                max = num
                max_index = index
            }
        })
        let root = new TreeNode(max)
        // 递归左右子树
        root.left = constructMaximumBinaryTree(
            nums.slice(left, max_index),
            left,
            max_index - 1
        )
        root.right = constructMaximumBinaryTree(
            nums.slice(max_index + 1, right + 1),
            max_index + 1,
            right
        )
        return root
    }
    return recur(nums, 0, nums.length - 1)
}
