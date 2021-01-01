import React, { useState } from 'react';
import { MinesweeperHeader } from './MinesweeperHeader';
import './Cell.component.css';
import './NumberViewer.component.css';
import { MinesweeperMap } from './MinesweeperMap';
import { getNewGrid } from './getNewGrid';
import { gameStatuses } from '../constants';
import { useTimer } from '../hooks/useTimer';


function Minesweeper(props) {
    const height = 20; // const [height, setHeight] = useState(20);
    const width = 20;// const [width, setWidth] = useState(20);
    const minesCount = 40;

    const [minesLeft, setMinesLeft] = useState(minesCount);
    const [gameStatus, setGameStatus] = useState(gameStatuses.notStarted);
    const [grid, setGrid] = useState(getNewGrid(height, width, minesCount));
    const [refresh, setRefresh] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const timer = useTimer(gameStatus === gameStatuses.running, gameStatus === gameStatuses.notStarted);
    
    const isGameOver = () => gameStatus === gameStatuses.won || gameStatus === gameStatuses.lost;

    function cellGotFlagged(flagged) {
        if(flagged) {
            setMinesLeft(minesLeft-1);
        }
        else {
            setMinesLeft(minesLeft+1);
        }
    }
    
    function cellGotClicked() {
        if(gameStatus === gameStatuses.notStarted) {
            setGameStatus(gameStatuses.running);
        }
    }

    function reset() {
        setGameStatus(gameStatuses.notStarted);
        setGrid(getNewGrid(height, width, minesCount));
        setMinesLeft(minesCount);
        setRefresh(!refresh);
    }

    function setGameEnd(status) {
        setGameStatus(status);
    }


    return (
        <div className="minesweeper">
            <div>
                <MinesweeperHeader minesLeft={minesLeft} timer={timer} gameStatus={gameStatus} isClicking={isClicking} resetHandler={reset} />
            </div>
            <div onMouseDown={() => setIsClicking(true)} onMouseUp={() => setIsClicking(false)} onMouseLeave={() => setIsClicking(false)}>
                <MinesweeperMap
                    refresh={refresh}
                    grid={grid}
                    height={height}
                    width={width}
                    minesCount={minesCount}
                    gameOver={isGameOver()}
                    cellGotFlagged={cellGotFlagged}
                    cellGotClicked={cellGotClicked}
                    setGameEnd={setGameEnd} />
            </div>
        </div>
    );
}

export default Minesweeper;
