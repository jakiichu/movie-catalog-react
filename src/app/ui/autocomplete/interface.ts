import type {DetailedHTMLProps, InputHTMLAttributes} from "react";

interface IAutocompleteProps
    extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onSelect'> {
    options: string[];
    onSelect?: (value: string) => void;
}


export type {IAutocompleteProps}
