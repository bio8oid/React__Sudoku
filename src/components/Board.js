import React from 'react';
import './Board.css';
import Tile from './Tile';

const Board = props => 
<div className="board">
        <div id='start-shadow'></div>
         {
             props.board.map((tile, index, className) => {
                    if (tile === ".") {
                        tile = ""
                    }else if( tile !== props.initialBoard[index]){
                        className = "enabled"
                    }else{
                        className = "disabled"
                        }
                    
                    return (
                        <Tile
                        value={tile}
                        key={index}
                        id={index}
                        onChange={props.onChange}
                        className={className}
                        initialBoard={props.initialBoard}
                        />
                        )
                    })}
    </div>

export default Board;