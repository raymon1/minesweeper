import React from 'react';
import { MinesweeperHeader } from './MinesweeperHeader';
import { MinesweeperMap } from './MinesweeperMap';
import './Cell.component.css';

function Minesweeper(props) {

    return (
        <div className="minesweeper">
            <MinesweeperHeader />
            <MinesweeperMap length="10" width="10" minesCount="10" />
        </div>
    );
}

export default Minesweeper;


