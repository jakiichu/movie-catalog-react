import type {ReactNode} from 'react';
import IconButton from "@/app/ui/icon-button";
import {PlusIcon} from "@phosphor-icons/react";
import {useNavigate} from "react-router";
import {ROUTER_PATH} from "@/app/common/enum";

const AddMovies = (): ReactNode => {
    const navigate = useNavigate();

    const handleClick = (): void => {
        navigate(ROUTER_PATH.createMovie);
    }
    return (
        <IconButton onClick={handleClick}>
            <PlusIcon/>
        </IconButton>
    );
};

export default AddMovies;
