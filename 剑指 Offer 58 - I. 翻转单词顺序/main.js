/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // 转为数组
    let newStrArr = s
        .trim()
        .split(' ')
        .filter((str) => str !== '')
    return newStrArr.reverse().join(' ')
}

s = 'a good   example'
// s = '  hello world!  '
console.log(reverseWords(s))
