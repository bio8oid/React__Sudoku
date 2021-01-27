import React from 'react';
import './Tile.css';


const Tile = props => 

	<>
        <input
        id={props.id} 
        onChange={props.onChange} 
        value={props.value} 
        key={props.id} 
        type="number"  
        min="1" 
        max="9" 
        className={props.className}
        ></input>
    </>

export default Tile;
