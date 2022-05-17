import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: (name: string) => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.normal + ' ' + s.error : s.normal

    return (
        <div className={inputClass}>
            <SuperInputText value={name} onChange={setNameCallback} placeholder={error}/>
            {/*<span>{error}</span>*/}
            <SuperButton onClick={() => addUser(name)}>add</SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
