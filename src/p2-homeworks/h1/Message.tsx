import React from 'react'
import styles from './Message.module.css'
type MassegeType = {
    avatar:string
    name:string
    message:string
    time:string
}
function Message(props:MassegeType) {
    return (
        <div className= {styles.message}>
            <div className={styles.left}>
                <div className={styles.angle}>
                    <div className={styles.circle}>
                        <img src={props.avatar} alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <b>{props.name}</b>
                <p>{props.message}</p>
                <span className={styles.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
