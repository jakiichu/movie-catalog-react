import {memo, type ReactNode, useMemo, useState} from 'react';
import style from './index.module.scss';
import {cn} from "@/app/utils/cn.ts";
import type {IAutocompleteProps} from "./interface.ts";
import {XIcon} from "@phosphor-icons/react";


const Autocomplete = memo(({
                               className,
                               options,
                               onSelect,
                               ...props
                           }: IAutocompleteProps): ReactNode => {
    const [value, setValue] = useState(props.value as string || '');
    const [isOpen, setIsOpen] = useState(false);

    const filtered = useMemo(
        () =>
            options.filter(option =>
                option.toLowerCase().includes(value.toLowerCase())
            ),
        [value, options]
    );

    const handleSelect = (option: string) => {
        setValue(option);
        setIsOpen(false);
        onSelect?.(option);
    };

    return (
        <div className={style.wrapper}>
            <input
                {...props}
                value={value}
                onChange={e => {
                    setValue(e.target.value);
                    setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setTimeout(() => setIsOpen(false), 150)}
                className={cn(style.input, className)}
            />
            {value && <XIcon onClick={() => {
                handleSelect('')
                setValue('')
            }} className={style.icon} size={24}/>}
            {isOpen && filtered.length > 0 && (
                <ul className={style.dropdown}>
                    {filtered.map(option => (
                        <li
                            key={option}
                            className={style.item}
                            onMouseDown={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
})

export default Autocomplete;
