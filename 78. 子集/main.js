/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = []
    const dfs = (arr, index) => {
        if (index === nums.length) {
            res.push(arr)
            return
        }
        dfs([...arr, nums[index]], index + 1) // 添加nums[index]到结果中的情况
        dfs([...arr], index + 1) // 不添加nums[index]到结果中的情况
    }
    dfs([], 0)
    // console.log(res)
    return res
}

nums = [1, 2, 3]
subsets(nums)
