import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
const style = {
        width: 400,
        display:'flex',
    padding:10,
    justifyContent: 'space-between',
    border: '1px solid'
}
    return (
        <div style={style}>
           <div>{props.affair.name}</div>
           <div>{props.affair.priority}</div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
