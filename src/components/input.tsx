import React, { ChangeEvent } from 'react';

type IProps = {
    className?: string;
    type?: string;
    placeholder?: string;
    id?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?:(event: React.KeyboardEvent<HTMLInputElement>) => void

}

const InputTodo = ({className, type, id, value, onChange, onKeyPress, placeholder}: IProps) => {
    return (
        <input className = {className} id = {id} value={value}  onChange={onChange} type={type} placeholder = {placeholder}/>
    );
};



export{InputTodo};