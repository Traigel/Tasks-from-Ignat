import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import styles from './Greeting.module.css'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (e: string) => {
        if (e !== ' ') {
            setName(e)
            setError(false)
        } else setError(true)
    }

    const addUser = () => {
        const nameReplace = name.replace(/^ +| +$|( ) +/g, "$1")
        if (nameReplace !== '') {
            addUserCallback(nameReplace)
            setName('')
            alert(`Hello ${nameReplace} !`) // need to fix
        } else setError(true)
    }

    const totalUsers = users.length // need to fix

    return (
        <div className={styles.greetingList}>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
            <ul>
                {users.map(el => <li key={el._id}>{el.name}</li>)}
            </ul>
        </div>
    )
}

export default GreetingContainer
