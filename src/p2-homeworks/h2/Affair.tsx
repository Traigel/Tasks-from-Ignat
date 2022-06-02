import React from 'react'
import s from './Affair.module.css'
import {AffairPriorityType} from "./HW2";

type AffairPropsType = {
    name: string
    priority: AffairPriorityType
    deleteAffairCallback: () => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback()
    }

    return (
        <div className={s.items}>
            <div>
                {props.name}
            </div>
            <div className={`${props.priority === 'low' ? s.low : props.priority === 'high' ? s.high : s.middle}`}>
                [{props.priority}]
            </div>
            <div>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
