import React from 'react'
import styles from './Affairs.module.css'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map(a => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            name={a.name}
            priority={a.priority}
            deleteAffairCallback={() => props.deleteAffairCallback(a._id)}
        />
    ))

    const onClickHandler = (filter: FilterType) => props.setFilter(filter)

    return (
        <div className={styles.item}>
            {mappedAffairs}
            <button className={styles.buttonItem} onClick={()=>onClickHandler('all')}>All</button>
            <button className={styles.buttonItem} onClick={()=>onClickHandler('high')}>High</button>
            <button className={styles.buttonItem} onClick={()=>onClickHandler('middle')}>Middle</button>
            <button className={styles.buttonItem} onClick={()=>onClickHandler('low')}>Low</button>
        </div>
    )
}

export default Affairs
