import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

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
            <input value={name} onChange={setNameCallback} placeholder={error}/>
            {/*<span>{error}</span>*/}
            <button onClick={() => addUser(name)}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
