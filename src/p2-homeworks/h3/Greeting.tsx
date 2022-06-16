import React, {ChangeEvent, KeyboardEvent} from 'react'
import style from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: string) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNameCallback(e.currentTarget.value)
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addUser()
    const inputClass = (error ? style.error : '')// need to fix with (?:)

    return (
        <div className={style.MainTitle}>
            <SuperInputText
                className={inputClass}
                value={name}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <SuperButton
                className={`${style.title} ${inputClass}`}
                onClick={addUser}
                disabled={!name}
            >add</SuperButton>
            <span className={style.title}>{totalUsers}</span>
            <span className={style.errSpan}>{error ? 'Error, name cannot be empty!' : ''}</span>
        </div>
    )
}

export default Greeting
