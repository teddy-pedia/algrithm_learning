/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let count = strs.length
    let commonPrefix = []
    let len = strs[0].length
    for(let i = 0 ; i < len ; i++) {
        let c = strs[0][i]
        for(let k = 1 ; k <count;k++) {
            let c_ = strs[k][i]
            if(c !== c_) {
                return commonPrefix.join('')
            }
        }
        commonPrefix.push(c)
    }
    return commonPrefix.join('')
}

let strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs))
strs = ['ab', 'a']
console.log(longestCommonPrefix(strs))
strs = ['a']
console.log(longestCommonPrefix(strs))
strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs))
