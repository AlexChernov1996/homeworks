import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
           <div style={{width:"40px"}}>{props.affair.name}</div>
           <div>{props.affair.priority}</div>
            <SuperButton onClick={deleteCallback} style={{background:"red"}}>X</SuperButton>
        </div>
    )
}

export default Affair
