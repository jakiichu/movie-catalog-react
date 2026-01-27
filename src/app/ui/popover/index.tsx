import { memo, type ReactNode, useEffect, useRef, useState } from 'react';
import style from './index.module.scss';
import { cn } from '@/app/utils/cn.ts';
import type {IPopoverProps} from "./interface.ts";



const Popover = memo(({
                          className,
                          trigger,
                          children,
                          defaultOpen = false,
                          disabled = false,
                      }: IPopoverProps): ReactNode => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!wrapperRef.current?.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={wrapperRef} className={cn(style.wrapper, className)}>
            <div
                className={style.trigger}
                onClick={() => !disabled && setIsOpen(v => !v)}
            >
                {trigger}
            </div>

            {isOpen && !disabled && (
                <div className={style.popover}>
                    {children}
                </div>
            )}
        </div>
    );
});

export default Popover;
