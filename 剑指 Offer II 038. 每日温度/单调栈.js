/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const res = new Array(temperatures.length).fill(0)
    const stack = []
    for (let i = 0; i < temperatures.length; i++) {
        // 如果当前温度大于栈顶元素温度，则可以更新栈顶元素所在索引的值
        while (
            stack.length > 0 &&
            stack[stack.length - 1][1] < temperatures[i]
        ) {
            let index = stack.pop()[0]
            res[index] = i - index
        }
        // 此时已经没有比当前元素更大的温度元素了，将当前元素入栈
        stack.push([i, temperatures[i]])
    }
    return res
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures))
