import type {ReactNode} from 'react';
import Modal from "@/app/ui/modal";
import {ROUTER_PATH} from "@/app/common/enum";
import {useNavigate, useParams} from "react-router";
import {useDeleteMoviesPresenter} from "@/app/module/movies/case/delete/case/presenter.ts";
import type {IUpdateMoviePort} from "@/domain/movies/interface";
import Button from "@/app/ui/button";
import {CircleNotchIcon} from "@phosphor-icons/react";
import style from './index.module.scss'

const Route = (): ReactNode => {
    const {id} = useParams<Readonly<Pick<IUpdateMoviePort, 'id'>>>();

    const navigate = useNavigate();
    const {mutateWithNavigate, isPending} = useDeleteMoviesPresenter(id)
    const handleClose = () => {
        navigate(ROUTER_PATH.movies)
    }
    return (
        <Modal title="Удаление" isOpen onClose={handleClose}>
            <p>Вы точно хотите удалить?</p>
            <Button className={style.button} onClick={mutateWithNavigate}>{isPending ?
                <CircleNotchIcon className={style.spin}/> : "Удалить"}</Button>
        </Modal>
    );
};

export default Route;
