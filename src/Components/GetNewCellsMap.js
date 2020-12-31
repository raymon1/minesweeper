export function GetNewCellsMap(length, width, minesCount) {

    function getNewCells(length, width) {
        const cells = [];
        for (var i = 0; i < length; i++) {
            cells[i] = [];
            for (var j = 0; j < width; j++) {
                cells[i][j] = {
                    isMine: false
                };
            }
        }

        return cells;
    }

    function addMines(cells, minesCount) {
        for (var i = 0; i < cells.length && minesCount; ++i) {
            for (var j = 0; j < cells[i].length && minesCount; ++j, --minesCount) {
                cells[i][j] = {
                    isMine: true
                };
            }
        }

        return cells;
    }

    function randomize(cells) {
        const n = cells.length;
        const m = cells[0].length;
        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < m; ++j) {
                const rand = Math.floor(Math.random() * n * m);
                const i1 = Math.floor(rand / m);
                const j1 = rand % m;
                [cells[i][j], cells[i1][j1]] = [cells[i1][j1], cells[i][j]];
            }
        }

        return cells;
    }

    function setneighboringMines(mines) {

        function calcNneighboringMines(x, y) {
            var count = 0;

            for (var i = Math.max(0, x - 1); i < Math.min(mines.length, x + 2); ++i) {
                for (var j = Math.max(0, y - 1); j < Math.min(mines[i].length, y + 2); ++j) {
                    if (mines[i][j].isMine) {
                        count++;
                    }
                }
            }

            return count;
        }

        for (var i = 0; i < mines.length; ++i) {
            for (var j = 0; j < mines[i].length; ++j) {
                mines[i][j].neighboringMines = calcNneighboringMines(i, j);
            }
        }

        return mines;
    }

    return setneighboringMines(randomize(addMines(getNewCells(length, width), minesCount)))
        .map((r, i) => r.map((c, j) => ({
            isCovered: true,
            isMine: c.isMine,
            neighboringMines: c.neighboringMines,
            x: i,
            y: j,
        })));
}
