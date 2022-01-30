/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    // return s.split(' ').join('%20')
    if (s.length === 0) return s
    let newStr = Array.prototype.slice
        .call(s)
        .map((element) => {
            if (element === ' ') {
                return '%20'
            }
            return element
        })
        .join('')
    // console.log(newStr)
    return newStr
}

s = 'We are happy.'
console.log(replaceSpace(s))
