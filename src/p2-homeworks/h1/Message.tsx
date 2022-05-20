import React from 'react'
import styles from './Message.module.css'
type MessageType = {
    avatar:string
    name:string
    message:string
    time:string
}
function Message(props:MessageType) {
    return (
        <div style={{background:"darkblue"}}>
        <div className= {styles.message}>
                <img src={props.avatar} alt=""/>
            <div className={styles.angle}></div>
            <div className={styles.content}>
                <b>{props.name}</b>
                <p>{props.message}</p>
                <div className={styles.time}>{props.time}</div>
            </div>
        </div>
        </div>
    )
}

export default Message
