import type {KeyboardEvent, ReactNode} from 'react';
import {useState} from 'react';
import style from './index.module.scss';
import {cn} from "@/app/utils/cn.ts";
import type {IMultiAddProps} from "./interface.ts";
import {PlusIcon} from "@phosphor-icons/react";


const MultiAdd = ({
                      value = [],
                      onChange,
                      placeholder,
                      className
                  }: IMultiAddProps): ReactNode => {
    const [inputValue, setInputValue] = useState('');

    const addItem = (val: string) => {
        const trimmed = val.trim();
        if (!trimmed || value.includes(trimmed)) return;

        onChange([...value, trimmed]);
        setInputValue('');
    };

    const removeItem = (item: string) => {
        onChange(value.filter(v => v !== item));
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addItem(inputValue);
        }

        if (e.key === 'Backspace' && !inputValue && value.length) {
            removeItem(value[value.length - 1]);
        }
    };

    return (
        <div className={cn(style.wrapper, className)}>
            {value.map(item => (
                <span key={item} className={style.chip}>
                    {item}
                    <button
                        type="button"
                        className={style.remove}
                        onClick={() => removeItem(item)}
                    >
                        ×
                    </button>
                </span>
            ))}

            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder={placeholder}
                className={style.input}
            />
            <PlusIcon className={style.addIcon}/>
        </div>
    );
};

export default MultiAdd;
