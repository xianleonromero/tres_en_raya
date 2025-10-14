import { useState } from "react";
import {Game} from "../Game";
function App() {
    const [player,setPlayer]=useState('');
    const onClickCell= () =>{
        setPlayer('X');
    }
  return(
    <>
    <h1>React</h1>
    <Game player={player} onClickCell={onClickCell} />
    </>
    )
}
export {App};