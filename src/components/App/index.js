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
    const win=calculateWinner();
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
    function calculateWinner(){
        const lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0;i<lines.length;i++){
            const [a,b,c]=lines[i];
            if (
                table[a] && 
                table[a] === table[b] && 
                table[a] === table[c]
            ){
                return table[a];
            }
        }
        return null;
    }
  return(
    <main className="App">
        {!!win && <Modal/>}
        <h1 className="App-title">3 en raya- Turno de {player}</h1>
        <Game player={player} onClickCell={onClickCell} table={table} />
    </main>
    )
}
export {App};