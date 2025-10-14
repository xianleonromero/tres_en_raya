import './Game.css';
const Cell = ({onClickCell,indexTable,table}) =>{
    return(
        <div className="Game-cell" onClick={() => onClickCell(indexTable)}>{table[indexTable]}</div>
    )
}

const Game = ({onClickCell,table}) =>{
    return(
        <section className="Game">
            <Cell onClickCell={onClickCell} table={table} indexTable={0} />
            <Cell onClickCell={onClickCell} table={table} indexTable={1} />
            <Cell onClickCell={onClickCell} table={table} indexTable={2} />
            <Cell onClickCell={onClickCell} table={table} indexTable={3} />
            <Cell onClickCell={onClickCell} table={table} indexTable={4} />
            <Cell onClickCell={onClickCell} table={table} indexTable={5} />
            <Cell onClickCell={onClickCell} table={table} indexTable={6} />
            <Cell onClickCell={onClickCell} table={table} indexTable={7} />
            <Cell onClickCell={onClickCell} table={table} indexTable={8} />
        </section>
    )
}
export{Game};