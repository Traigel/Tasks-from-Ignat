import React from 'react'
import styles from './Affair.module.css'
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
        <div className={styles.items}>
            <div>
                {props.name}
            </div>
            <div className={`${props.priority === 'low' ? styles.low : props.priority === 'high' ? styles.high : styles.middle}`}>
                [{props.priority}]
            </div>
            <div>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
