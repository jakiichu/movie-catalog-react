import type {ReactNode} from 'react';
import style from "./index.module.scss"
import {cn} from "@/app/utils/cn.ts";
import type {IDimWrapperProps} from "./interface.ts";

// тут просто как блок если вы сейчас сидите в Ide от jetbrains 2025.3.1 вокруг вас будут такие же блоки

// чтоб не писать свичкейсы можно вот такую красоту написать и получится рабочий вариант
const colorVariants = {
    main: style.mainColor,
    additional: style.additionalColor
}

const DimWrapper = ({
                        className,
                        color = 'main',
                        ...props
                    }: IDimWrapperProps): ReactNode => {
    return (
        <div className={cn(colorVariants[color], style.dimWrapper, className)} {...props}/>
    );
};

export default DimWrapper;
