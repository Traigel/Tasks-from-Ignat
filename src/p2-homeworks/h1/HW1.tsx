import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
    name: 'Vladimir T',
    message: 'Hi Ignat. How are you?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW1
