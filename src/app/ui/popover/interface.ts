import type {ReactNode} from "react";

interface IPopoverProps {
    className?: string;
    trigger: ReactNode;
    children: ReactNode;
    defaultOpen?: boolean;
    disabled?: boolean;
}

export type {IPopoverProps}