import React, {ChangeEvent, KeyboardEvent} from 'react'
import style from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: string) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNameCallback(e.currentTarget.value)
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addUser()
    const inputClass = (error !== '' ? style.error : '')// need to fix with (?:)

    return (
        <div className={`${style.MainTitle} ${inputClass}`}>
            <input value={name}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button className={style.title}
                    disabled={!name}
                    onClick={addUser}>add
            </button>
            <span className={style.title}>{totalUsers}</span>
            <span className={style.errSpan}>{error}</span>
        </div>
    )
}

export default Greeting
