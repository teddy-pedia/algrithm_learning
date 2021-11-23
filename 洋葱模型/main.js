function f(next) {
    console.log(1)
    next()
    console.log(2)
}

function g(next) {
    console.log(3)
    next()
    console.log(4)
}

function h(next) {
    console.log(5)
    next()
    console.log(6)
}

function compose(...funcs) {
    // 你的实现
    return function () {
        function execute(index) {
            const fn = funcs[index]
            if (!fn) return null
            fn(function next() {
                execute(index + 1)
            })
        }

        execute(0)
    }
}

const fn = compose(f, g, h)
fn()    // 1,3,5,6,4,2
