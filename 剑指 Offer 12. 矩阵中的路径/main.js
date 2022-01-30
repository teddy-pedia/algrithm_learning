/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length,
        n = board[0].length
    // 该方法用于找到board[i][j]四个方向的字符是否与word[index]匹配
    const dfs = (i, j, index) => {
        // 越界、不匹配时，返回false
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) {
            return false
        }
        // 当index === len时，表示全部匹配
        if (index === word.length - 1) return true
        // 为了避免进行回退的方式的搜索，可以将当前board[i][j]的值暂时设置为''
        const temp = board[i][j]
        board[i][j] = ''
        // 对四个方向进行搜索
        const res =
            dfs(i + 1, j, index + 1) ||
            dfs(i - 1, j, index + 1) ||
            dfs(i, j + 1, index + 1) ||
            dfs(i, j - 1, index + 1)
        // 恢复当前字符
        board[i][j] = temp
        return res
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true
        }
    }
    return false
}
