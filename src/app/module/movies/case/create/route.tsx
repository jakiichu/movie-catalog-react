import type {ReactNode} from 'react';
import Modal from "@/app/ui/modal";
import {useNavigate} from "react-router";
import {ROUTER_PATH} from "@/app/common/enum";
import MoviesForm from "@/app/module/movies/form";
import {useCreateMoviesPresenter} from "./case/presenter.ts";

const Route = (): ReactNode => {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate(ROUTER_PATH.movies)
    }
    const {mutateWithReset, form, isPending} = useCreateMoviesPresenter()
    return (
        <Modal title="Добавление" isOpen onClose={handleClose}>
            <MoviesForm isPending={isPending} textButton="Добавить" form={form} onSubmit={mutateWithReset}/>
        </Modal>
    );
};

export default Route;
