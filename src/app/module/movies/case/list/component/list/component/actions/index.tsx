import type {ReactNode} from 'react';
import IconButton from "@/app/ui/icon-button";
import {PencilSimpleIcon, TrashIcon} from "@phosphor-icons/react";
import style from './index.module.scss'
import type {IUpdateMoviePort} from "@/domain/movies/interface";
import {useNavigate} from "react-router";
import {ROUTER_PATH} from "@/app/common/enum";
import {replaceArgs} from "@/app/utils/replace-args.ts";

const MoviesItemActions = ({id}: Pick<IUpdateMoviePort, 'id'>): ReactNode => {
    const navigate = useNavigate();
    const handleNavigateToEdit = (): void => {
        navigate(replaceArgs(ROUTER_PATH.editMovie, {":id": id}))
    }
    const handleNavigateToDelete = (): void => {
        navigate(replaceArgs(ROUTER_PATH.deleteMovie, {":id": id}))
    }

    return (
        <div>
            <IconButton onClick={handleNavigateToEdit} className={style.iconButton} color='additional'>
                <PencilSimpleIcon/>
            </IconButton>
            <IconButton onClick={handleNavigateToDelete} className={style.iconButton} color='additional'>
                <TrashIcon/>
            </IconButton>
        </div>
    );
};

export default MoviesItemActions;
