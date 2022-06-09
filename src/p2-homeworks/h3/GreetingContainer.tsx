import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

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
    const [error, setError] = useState<string>('') // need to fix any
///mg
    const setNameCallback = (e: string) => {
        if (!/^[A-z]/.test(e)) {
            setError('Error, name must start with a letter!')
            setName('')
        } else setName(e)
    }

    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`) // need to fix
        setName('')
        setError('')
    }

    const totalUsers = users.length // need to fix

    return (
        <div>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
        </div>
    )
}

export default GreetingContainer
