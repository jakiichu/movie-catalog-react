import type {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from 'react';
import style from './index.module.scss'
import {cn} from "@/app/utils/cn.ts";



const Input = ({className, type = 'text', ...props}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>): ReactNode => {
    return (
        <input className={cn(style.input, className)} type={type} {...props}/>
    );
};

export default Input;
