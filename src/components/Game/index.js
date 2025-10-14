import './Game.css';
const Cell = () =>{
    const onClickCell= () =>{
        alert("Evento");
    }
    return(
        <div className="Game-cell" onClick={onClickCell}></div>
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