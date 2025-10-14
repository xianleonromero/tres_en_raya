import { useState } from 'react';
import './Game.css';
const Cell = () =>{
    const [player, setPlayer]= useState('');
    const onClickCell= () =>{
        setPlayer('X');
    }
    return(
        <div className="Game-cell" onClick={onClickCell}>{player}</div>
    )
}

const Game = () =>{
    return(
        <section className="Game">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </section>
    )
}
export{Game};