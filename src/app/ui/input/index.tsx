import type {ReactNode} from 'react';
import style from './index.module.scss'
import {cn} from "@/app/utils/cn.ts";
import type {IInputProps} from "./interface.ts";


const Input = ({
                   className,
                   type = 'text',
                   errorMessage,
                   ...props
               }: IInputProps): ReactNode => {
    return (
        <div className={style.wrapper}>
            <input className={cn(style.input, className)} type={type} {...props}/>
            {errorMessage && <span className={style.error}>{errorMessage}</span>}
        </div>
    );
};

export default Input;
