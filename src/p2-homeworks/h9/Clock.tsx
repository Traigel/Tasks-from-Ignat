import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
        setDisabled(false)
    }
    const start = () => {
        setDisabled(true)
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => setShow(true)
    const onMouseLeave = () => setShow(false)

    let stringTime = date === undefined ? 'Click start'
        :`${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}
        :${date.getMinutes() < 10 ? '0' + date.getMinutes : date.getMinutes()}
        :${date.getSeconds() < 10 ? '0' + date.getSeconds(): date.getSeconds()}`

    let stringDate = date === undefined ? ''
        :`${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}
        .${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}
        .${date.getFullYear()}`

    return (
        <div style={{margin: '10px'}}>
            <div className={styles.time}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>
            <SuperButton disabled={disabled} onClick={start}>start</SuperButton>
            <SuperButton disabled={!disabled} style={{marginLeft: '18px'}} onClick={stop}>stop</SuperButton>
        </div>
    )
}

export default Clock
