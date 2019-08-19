import React from 'react';
import './Board.css';
import Tile from './Tile';


const disabled = 'disabled'

const Board = props => 
<div className="board">
        <div id='start-shadow' className=''></div>
         {
             props.board.map((tile, index, className) => {
                    if (tile === ".") {
                        tile = "" && className == "enabled"
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
                        />
                        )
                    })}
    </div>

export default Board;