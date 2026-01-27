import type {ReactNode} from 'react';
import {cn} from "@/app/utils/cn.ts";
import style from './index.module.scss'
import type {IIconButtonProps} from "@/app/ui/icon-button/interface.ts";

const colorVariants = {
    main: style.mainColor,
    additional: style.additionalColor
}

// type вытаскиваем, чтоб дать значение по умолчанию, а надо это чтоб формы не тригерить
const IconButton = ({
                        className,
                        type = 'button',
                        color = 'main',
                        ...props
                    }: IIconButtonProps): ReactNode => {
    return (
        <button className={cn(style.iconButton, colorVariants[color], className)} type={type} {...props}/>
    );
};

export default IconButton;
