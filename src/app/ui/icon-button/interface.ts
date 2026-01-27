import type {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

interface IIconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: 'main' | 'additional'
}

export type {
    IIconButtonProps
}
