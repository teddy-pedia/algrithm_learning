/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var allArray = (nums) => {
    const res = []
    const dfs = (path, index, candidates) => {
        if (index === nums.length) {
            res.push(path)
            return
        }
        for (let i = 0; i < candidates.length; i++) {
            // 创建的temp数组是除去了当前的candidates[i]之外的元素组成的数组
            let temp = candidates.slice(0, i).concat(candidates.slice(i + 1))
            dfs([...path, candidates[i]], index + 1, temp)
        }
    }
    dfs([], 0, nums)
    return res
}

console.log(allArray([1, 2, 3]))
// [[ 1, 2, 3 ],[ 1, 3, 2 ],[ 2, 1, 3 ],[ 2, 3, 1 ],[ 3, 1, 2 ],[ 3, 2, 1 ]]
console.log(allArray([0, 1])) // [ [ 0, 1 ], [ 1, 0 ] ]
