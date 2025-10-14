import { useState } from "react";
import {Game} from "../Game";
import {Modal} from "../Modal";
import './App.css'
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
    <main className="App">
        <Modal />
        <h1 className="App-title">3 en raya- Turno de {player}</h1>
        <Game player={player} onClickCell={onClickCell} table={table} />
    </main>
    )
}
export {App};