import  './VictoryScreen.css';
const VictoryScreen=({winPlayer})=>{
    return(
        <article className="VictoryScreen">
            <div className="VictoryScreen-box">
                <h2 className="VictoryScreen-title">Ganador:</h2>
                <p className="VictoryScreen-player">{winPlayer}</p>
                <button className="VictoryScreen-replay">Reiniciar</button>
            </div>
        </article>
    )
}
export {VictoryScreen}