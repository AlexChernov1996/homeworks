import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }

    const finalInputClassName = `${s.checkmark} ${className ? className : ''}`

    return (
        <label className={s.container}>{children}
            <input type={'checkbox'}
                   onChange={onChangeCallback}
                   {...restProps}/>
            <span className={s.checkmark}></span>
        </label> // благодаря label нажатие на спан передастся в инпут
    )
}

//
export default SuperCheckbox
