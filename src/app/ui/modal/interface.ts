import type {PropsWithChildren} from "react";

interface IModalProps extends PropsWithChildren {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
}

export type {IModalProps}
