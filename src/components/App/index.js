import { useState } from "react";
import {Game} from "../Game";
function App() {
    const [player,setPlayer]=useState('X');
    const [table,setTable]=useState(
        [
            null,null,null,
            null,null,null,
            null,null,null
        ]
    )
    const onClickCell= (index) =>{
        if (table[index]===null){
            const newTable=table.slice();
            newTable[index]=player;
            setTable(newTable);
            player === 'X'
                ? setPlayer('0') 
                : setPlayer('X')
        }
    }
  return(
    <>
    <h1>3 en raya- Turno de {player}</h1>
    <Game player={player} onClickCell={onClickCell} table={table} />
    </>
    )
}
export {App};