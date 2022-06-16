import React from 'react'
import styles from './Affairs.module.css'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilterHandler: (filterTitle: FilterType) => void
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

    const onClickHandler = (filterTitle: FilterType) => props.setFilterHandler(filterTitle)

    return (
        <div className={styles.item}>
            {mappedAffairs}
            <SuperButton onClick={()=>onClickHandler('all')}>All</SuperButton>
            <SuperButton onClick={()=>onClickHandler('high')}>High</SuperButton>
            <SuperButton onClick={()=>onClickHandler('middle')}>Middle</SuperButton>
            <SuperButton onClick={()=>onClickHandler('low')}>Low</SuperButton>
        </div>
    )
}

export default Affairs
