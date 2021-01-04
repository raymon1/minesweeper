import React from 'react';
import ContextMenuHandler from "./ContextMenuHandler";

export function Cell(props) {
    const cell = props.data.isCovered ? 'cell' : 'uncovered-cell';
    const number = !props.data.isCovered && !props.isMine ? `cell-${props.data.neighboringMines}` : '';
    const mine = !props.data.isCovered && props.isMine ? 'cell-mine' : '';
    const content = props.data.isCovered ? 
        (props.data.flagged ? '🚩' : '') : (props.data.isMine ? '💣' : props.data.neighboringMines > 0 ? props.data.neighboringMines : ''); 
    const clickedMine = props.data.clickedMine ? 'clicked-mine' : ''

    const ctxMenuHandler = new ContextMenuHandler(_ => props.handleRightClick(props.data));

    return (
        <button 
            className={`${cell} ${number} ${mine} ${clickedMine}`}
            onClick={() => props.handleLeftClick(props.data)}
            onContextMenu={ctxMenuHandler.onContextMenu}
            onTouchStart={ctxMenuHandler.onTouchStart}
            onTouchCancel={ctxMenuHandler.onTouchCancel}
            onTouchEnd={ctxMenuHandler.onTouchEnd}
            onTouchMove={ctxMenuHandler.onTouchMove}>
                { content }
        </button>
    );
}

export default Cell;
