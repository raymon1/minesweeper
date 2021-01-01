import React from 'react';
import { gameStatuses } from '../constants';
import { NumberViewer } from './NumberViewer';

export function MinesweeperHeader(props) {
    return (
        <div>
            <NumberViewer value={props.minesLeft} />
            <GameStatus status={props.gameStatus} onClickHandler={props.resetHandler} isClicking={props.isClicking} />       
            <NumberViewer value={props.timer} />
        </div>
    );
}

export default MinesweeperHeader;

export function GameStatus(props) {
    function getStatusEmoji(status) {
        if (status === gameStatuses.lost) {
            return '😞';
        } else if (status === gameStatuses.won) {
            return '😎';
        } else {
            return '😊'
        }
    }

    return (
        <button onClick={props.onClickHandler}>
            { props.isClicking ? '😲' : getStatusEmoji(props.status) }
        </button>
    );
}
