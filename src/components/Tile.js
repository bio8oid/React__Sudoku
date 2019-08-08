import React from 'react';
import style from './Tile.css';


const Tile = props => 

	<>
        <input id={props.id} onChange={props.onChange} value={props.value} key={props.id} type="number"  min="1" max="9" ></input>
    </>

export default Tile;

