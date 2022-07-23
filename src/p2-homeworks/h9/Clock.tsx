import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => setShow(true)
    const onMouseLeave = () => setShow(false)

    let stringTime = date === undefined ? '' : date.getDate() + '.' + date.getMonth() + 1 + '.' + date.getFullYear()
    let stringDate = date === undefined ? '' : date.getHours() + '.' + date.getMinutes() + '.' + date.getSeconds()

    return (
        <div style={{margin: '10px'}}>
            <div
                style={{width: '100px', height: '45px'}}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringDate}
                {show && (
                    <div style={{position: 'absolute',}}>
                        {stringTime}
                    </div>
                )}
            </div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
        </div>
    )
}

export default Clock
