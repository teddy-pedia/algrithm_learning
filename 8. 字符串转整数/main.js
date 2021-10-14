/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    class AutoMachine {
        constructor() {
            this.state = 'start'
            this.sign = 1   // 默认为正数，负数的话设置为-1
            this.in_number = 0  // 整数的绝对值部分
            this.map = new Map([
                ['start', ['start', 'signed', 'in_number', 'end']],
                ['signed', ['end', 'end', 'in_number', 'end']],
                ['in_number', ['end', 'end', 'in_number', 'end']],
                ['end', ['end', 'end', 'end', 'end']],
            ])
        }

        /**
         * 根据当前要处理的字符，定位到状态的第几列
         * @param char 当前字符
         * @return {number}
         */
        getIndex(char) {
            if (char === ' ') {
                return 0
            } else if (char === '+' || char === "-") {
                return 1
            } else if (typeof Number(char) === 'number' && !isNaN(Number(char))) {
                return 2
            } else {
                return 3
            }
        }

        /**
         * 获取当前字符，进行操作：修改符号 || 转换数字
         * @param char 当前字符
         */
        get(char) {
            // 根据当前字符获取状态
            this.state = this.map.get(this.state)[this.getIndex(char)]
            if (this.state === 'signed') {
                this.sign = char === 1 ? 1 : -1
            } else if (this.state === 'in_number') {
                this.in_number = this.in_number * 10 + Number(char)
                // 判断是否越界
                this.in_number =
                    this.sign === 1
                        ? Math.min(this.in_number, Math.pow(2, 31) - 1)  // 正数时
                        : Math.min(this.in_number, -Math.pow(-2, 31))    // 负数时
            }
        }

    }

    const auto = new AutoMachine()
    for (let i = 0; i < s.length; i++) {
        auto.get(s[i])
    }
    return auto.in_number * auto.sign
}

console.log(myAtoi(' -42'))
