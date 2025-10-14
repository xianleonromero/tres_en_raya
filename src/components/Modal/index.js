import React from "react";
import ReactDOM from "react-dom";
import { VictoryScreen } from "../VictoryScreen";
const Modal = () =>{
    return ReactDOM.createPortal(
        <VictoryScreen />,
        document.getElementById('modal')
    )
}
export {Modal};