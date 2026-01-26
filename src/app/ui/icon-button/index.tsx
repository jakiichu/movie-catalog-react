import type {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';
import {cn} from "@/app/utils/cn.ts";
import style from './index.module.scss'

// type вытаскиваем чтоб дать значение по умолчанию а надо это чтоб формы не тригерить
const IconButton = ({
                        className,
                        type = 'button',
                        ...props
                    }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>): ReactNode => {
    return (
        <button className={cn(style.iconButton, className)} type={type} {...props}/>
    );
};

export default IconButton;
