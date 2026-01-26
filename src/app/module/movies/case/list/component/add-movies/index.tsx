import type {ReactNode} from 'react';
import IconButton from "@/app/ui/icon-button";
import {PlusIcon} from "@phosphor-icons/react";

const AddMovies = (): ReactNode => {
    return (
        <IconButton>
            <PlusIcon/>
        </IconButton>
    );
};

export default AddMovies;
