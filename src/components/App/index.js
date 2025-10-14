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
        const newTable=table.slice();
        newTable[index]=player;
        setTable(newTable);
    }
  return(
    <>
    <h1>React</h1>
    <Game player={player} onClickCell={onClickCell} table={table} />
    </>
    )
}
export {App};