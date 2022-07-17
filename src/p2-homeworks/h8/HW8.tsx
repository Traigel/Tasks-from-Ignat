import React, {useState} from 'react'
import {filterAC, homeWorkReducer, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)

    const finalPeople = people.map((el: UserType) => (
        <div key={el._id} className={styles.item}>
            <div>
                {el.name}
            </div>
            <div>
                {el.age}
            </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortAC("up")))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortAC("down")))
    const ageCheck = () => setPeople(homeWorkReducer(initialPeople, filterAC(18)))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            <div style={{margin: '10px'}}>
                <div className={styles.items}>
                    {finalPeople}
                </div>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={ageCheck}>check 18</SuperButton>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
