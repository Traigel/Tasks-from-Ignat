import React from 'react'
import s from './AlternativeMessage.module.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

export const AlternativeMessage = (props: MessageType) => {
    return <div className={s.item}>
        <div className={s.imgAvatar}>
            <img alt={'avatar'} src={props.avatar}/>
        </div>
        <div className={s.message}>
            <div className={s.username}>
                {props.name}
            </div>
            <div>
                {props.message}
            </div>
            <div className={s.time}>
                {props.time}
            </div>
        </div>
    </div>
}
