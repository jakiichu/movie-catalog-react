import type {DetailedHTMLProps, HTMLAttributes} from "react";

interface IDimWrapperProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: 'main' | 'additional'
}

export type {IDimWrapperProps}
