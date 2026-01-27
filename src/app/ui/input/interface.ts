import type {DetailedHTMLProps, InputHTMLAttributes} from "react";

interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

    errorMessage?: string;
}

export type {
    IInputProps
}
