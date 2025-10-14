import  './VictoryScreen.css';
const VictoryScreen=({winPlayer,onClickReplay})=>{
    return(
        <article className="VictoryScreen">
            <div className="VictoryScreen-box">
                <h2 className="VictoryScreen-title">Ganador:</h2>
                <p className="VictoryScreen-player">{winPlayer}</p>
                <button className="VictoryScreen-replay" onClick={onClickReplay}>Reiniciar</button>
            </div>
        </article>
    )
}
export {VictoryScreen}