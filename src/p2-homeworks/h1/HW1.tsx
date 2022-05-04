import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'data:image/jpeg;base64,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',
    name: 'Billy Harington',
    message: 'Hey!Are you a boss in this gym?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            should work (должно работать)
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
