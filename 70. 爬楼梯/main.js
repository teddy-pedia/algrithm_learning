const climb = function (n) {
    const p = []
    p[1] = 1
    p[2] = 2
    for (let i = 3; i <= n; i++) {
        p[i] = p[i - 1] + p[i - 2]
    }
    return p[n]
}

console.log(climb(5))
