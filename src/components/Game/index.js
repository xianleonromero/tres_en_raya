import './Game.css';
const Cell = ({onClickCell,player}) =>{
    return(
        <div className="Game-cell" onClick={onClickCell}>{player}</div>
    )
}

const Game = ({onClickCell,player}) =>{
    return(
        <section className="Game">
            <Cell onClickCell={onClickCell} player={player} />
            <Cell onClickCell={onClickCell} player={player} />
            <Cell onClickCell={onClickCell} player={player} />
            <Cell onClickCell={onClickCell} player={player} />
            <Cell onClickCell={onClickCell} player={player} />
            <Cell onClickCell={onClickCell} player={player} />
            <Cell onClickCell={onClickCell} player={player} />
            <Cell onClickCell={onClickCell} player={player} />
            <Cell onClickCell={onClickCell} player={player} />
        </section>
    )
}
export{Game};