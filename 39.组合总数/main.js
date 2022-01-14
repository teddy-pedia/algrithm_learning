/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const ans = []
    const dfs = (target, combine, index) => {
        if (index === candidates.length || target < 0) {
            return
        }
        if (target === 0) {
            ans.push(combine)
            return
        }
        for (let i = index; i < candidates.length; i++) {
            // i需要从index开始，避免选中当前节点左侧的节点，这样来去重
            let newTarget = target - candidates[i]
            dfs(newTarget, [...combine, candidates[i]], i)
        }
    }
    dfs(target, [], 0)
    return ans
}

const candidates = [2, 3, 6, 7],
    target = 7
// const candidates = [2, 3, 5],
//     target = 8
console.log(combinationSum(candidates, target))
