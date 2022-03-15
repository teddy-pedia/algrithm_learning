/**
 * 请根据每日 气温 列表 temperatures ，重新生成一个列表，
 * 要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。
 * 如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const res = new Array(temperatures.length).fill(0)
    for (let i = 0; i < temperatures.length; i++) {
        for (let k = i + 1; k < temperatures.length; k++) {
            if (temperatures[k] > temperatures[i]) {
                res[i] = k - i
                break
            }
        }
    }
    return res
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures))
