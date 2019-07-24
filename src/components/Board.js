import React from 'react';
//import style from '../containers/Board.css';
import Tile from './Tile';




const Board = props => 

	<div>
        <Tile  />
    </div>

export default Board;


/*
Komponent Board powinien renderować 81 komponentów Tile - jedno dla każdego pola. Ponieważ Board będzie dostawał stan planszy jako stringa, użyj funkcji split, aby zamienić go na tablicę. Następnie użyj metody map, żeby wartości zamienić na komponenty Tile.
*/