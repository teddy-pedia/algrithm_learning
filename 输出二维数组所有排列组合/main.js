const solution = (nums) => {
    const rows = nums.length
    let res = []
    for (let i = 0; i < rows; i++) {
        res = getValues(res, nums[i])
    }
    return res
}
const getValues = (arr1, arr2) => {
    let res = []
    for (let i = 0; i < arr1.length; i++) {
        let val1 = arr1[i]
        for (let k = 0; k < arr2.length; k++) {
            let val2 = arr2[k]
            res.push(val1 + val2)
        }
    }
    return res
}
// console.log(getValues([1, 2], ['a', 'b']))
let res = solution([
    ['A', 'B'],
    ['a', 'b'],
    [1, 2],
])
console.log(res)
