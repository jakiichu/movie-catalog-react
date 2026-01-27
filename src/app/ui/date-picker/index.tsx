import type {ReactNode} from 'react';
import {useState} from 'react';
import style from './index.module.scss';
import {cn} from "@/app/utils/cn.ts";
import type {IDatePickerProps} from "@/app/ui/date-picker/interface.ts";


const DatePicker = ({
                        className,
                        value,
                        onChange,
                        ...props
                    }: IDatePickerProps): ReactNode => {
    const [focused, setFocused] = useState(false);

    return (
        <div
            className={cn(
                style.wrapper,
                value && style.filled,
                focused && style.focused
            )}
        >
            <input
                {...props}
                type="date"
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={cn(style.input, className)}
            />
        </div>
    );
};

export default DatePicker;
