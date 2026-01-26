import type {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from "./index.module.scss"
import {cn} from "@/app/utils/cn.ts";

// тут просто как блок если вы сейчас сидите в Ide от getbrains 2025.3.1 вокруг вас будут такие же блоки

const DimWrapper = ({
                        className,
                        ...props
                    }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>): ReactNode => {
    return (
        <div className={cn(styles.dimWrapper, className)} {...props}/>
    );
};

export default DimWrapper;
