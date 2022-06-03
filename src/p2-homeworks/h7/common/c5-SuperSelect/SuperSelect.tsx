import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] = options ? options.map((op, index) => (
            <option key={index} value={index}>{op}</option>
        )) : []
    ; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }

    return (

        <div className={"custom-select"} style={{width:"200px;", height:"50px"}}>
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select></div>
    )
}

export default SuperSelect
