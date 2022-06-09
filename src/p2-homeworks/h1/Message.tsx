import React from 'react'
import styles from './Message.module.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return <div className={styles.item}>
        <div className={styles.imgAvatar}>
          <img alt={'avatar'} src={props.avatar}/>
        </div>
        <div className={styles.message}>
            <div className={styles.username}>
                {props.name}
            </div>
            <div>
                {props.message}
            </div>
            <div className={styles.time}>
                {props.time}
            </div>
        </div>
    </div>
}

export default Message
