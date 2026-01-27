import type {ReactNode} from 'react';
import {cn} from "@/app/utils/cn.ts";
import style from './index.module.scss'
import type {IIconButtonProps} from "./interface.ts";

const colorVariants = {
    main: style.mainColor,
    additional: style.additionalColor
}

const Button = ({
                    className,
                    type = 'button',
                    color = 'main',
                    ...props
                }: IIconButtonProps): ReactNode => {
    return (
        <button className={cn(style.button, colorVariants[color], className)} type={type} {...props}/>
    );
};

export default Button;
