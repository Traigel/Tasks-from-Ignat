import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
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
                <SuperButton onClick={deleteCallback}>X</SuperButton>
            </div>
        </div>
    )
}

export default Affair
