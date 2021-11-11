/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function (n) {
    if (n === 0) {
        return null
    } else {
        return getAns(1, n)
    }
}

const getAns = function (start, end) {
    let res = []
    if (start > end) {
        res.push(null)
        return res
    }
    if (start === end) {
        res.push(new TreeNode(start))
        return res
    }
    for (let i = start; i <= end; i++) {
        let leftNodes = getAns(start, i - 1)
        let rightNodes = getAns(i + 1, end)
        // 左右节点两两匹配
        leftNodes.forEach(left => {
            rightNodes.forEach(right => {
                let root = new TreeNode(i)
                root.left = left
                root.right = right
                res.push(root)
            })
        })
    }
    return res
}
