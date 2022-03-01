/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
    class AutoMachine {
        constructor() {
            this.state = 'start'
            this.in_number = 0
            this.signed = 1 // 1表示整数，-1表示负数
            this.map = new Map([
                ['start', ['start', 'signed', 'in_number', 'end']],
                ['signed', ['end', 'end', 'in_number', 'end']],
                ['in_number', ['end', 'end', 'in_number', 'end']],
                ['end', ['end', 'end', 'end', 'end']],
            ])
        }

        getIndex(char) {
            if (char === ' ') {
                return 0
            } else if (char === '+' || char === '-') {
                return 1
            } else if (
                typeof Number(char) === 'number' &&
                !isNaN(Number(char))
            ) {
                return 2
            } else {
                return 3
            }
        }

        /**
         * 更新状态及对应的值
         * @param {char} char
         */
        update(char) {
            // 获取当前的状态
            this.state = this.map.get(this.state)[this.getIndex(char)]
            if (this.state === 'signed') {
                this.signed = char === '+' ? 1 : -1
            } else if (this.state === 'in_number') {
                this.in_number = this.in_number * 10 + Number(char)
                // 判断是否越界
                this.in_number =
                    this.signed > 0
                        ? Math.min(this.in_number, Math.pow(2, 31) - 1)
                        : Math.min(this.in_number, Math.pow(2, 31))
            }
        }
    }

    const autoMachine = new AutoMachine()
    for (let i = 0; i < str.length; i++) {
        autoMachine.update(str[i])
    }
    return autoMachine.in_number * autoMachine.signed
}

s = ' -42'
s = ' -91283472332'
console.log(strToInt(s))
