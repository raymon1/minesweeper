import React, { useState } from 'react';
import { Cell } from './Cell';
import { GetNewCellsMap } from './GetNewCellsMap';


export function MinesweeperMap(props) {

    const [cells, setCells] = useState(GetNewCellsMap(props.length, props.width, props.minesCount));
    const [gameOver, setGameOver] = useState(false);

    function handleRightClick(cell, e) {
        e.preventDefault();
        const [x, y] = [cell.x, cell.y];

        if (!cells[x][y].isCovered || gameOver)
            return;

        const newCells = cells.map(r => r.map(c => ({...c})));

        newCells[x][y].flagged = !newCells[x][y].flagged;

        setCells(newCells);
    }

    function handleLeftClick(cell) {
        const [x, y] = [cell.x, cell.y];

        if (!cells[x][y].isCovered || gameOver || cells[x][y].flagged)
            return;

        if (cells[x][y].isMine) {
            const newCells = cells.map(r => r.map(c => ({
                ...c,
                isCovered: c.isMine ? false : c.isCovered
            })));
            newCells[x][y].clickedMine = true;

            setCells(newCells);
            setGameOver(true);
        }
        else if (cells[x][y].neighboringMines === 0) {
            const newCells = cells.map(r => r.map(c => ({
                ...c
            })));
            newCells[x][y].isCovered = false;

            uncoverEmptyCells(newCells, cell);
        }
        else {
            const newCells = cells.map(r => r.map(c => ({
                ...c
            })));
            newCells[x][y].isCovered = false;

            setCells(newCells);
        }
    }

    function uncoverEmptyCells(cells, cell) {
        const queue = [[cell.x, cell.y]];
        let k = 0;
        while (queue.length > 0) {
            const n = queue.length;
            for (let l = 0; l < n; l++) {
                const [x, y] = queue.shift();

                for (let i = Math.max(0, x - 1); i < Math.min(props.length, x + 2); ++i) {
                    for (let j = Math.max(0, y - 1); j < Math.min(props.width, y + 2); ++j) {
                        if (!cells[i][j].isMine && cells[i][j].isCovered && !cells[i][j].flagged) {
                            cells[i][j].isCovered = false;
                            if(cells[i][j].neighboringMines === 0) {
                                queue.push([i, j]);
                            }
                        }
                    }
                }
            }

            let newCells = cells.map(r => r.map(c => ({ ...c })));

            setTimeout(() => {
                setCells(newCells);

            }, k++ * 50);
        }
    }

    return (
        cells.map((r, i) => <div key={i} className="row">
            {r.map((c, j) => <Cell
                key={j}
                data={c}
                handleLeftClick={handleLeftClick}
                handleRightClick={handleRightClick} />)}
        </div>
        )
    );
}


