import React from 'react';
import style from './Tile.css';


const Tile = props => 

	<>
        <input onChange={props.onChange} type='number'  min="1" max="9" value={props.value}></input>
    </>

export default Tile;


/* 
type={props.type} number={props.number} min= max= onChange={props.onChange} value=

{props.type} {props.min} {props.max} {props.value} {props.onChange}
*/