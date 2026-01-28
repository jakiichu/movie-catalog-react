import type {ReactNode} from 'react';
import Modal from "@/app/ui/modal";
import MoviesForm from "@/app/module/movies/form";
import {ROUTER_PATH} from "@/app/common/enum";
import {useNavigate} from "react-router";
import {useUpdateMoviesPresenter} from "@/app/module/movies/case/edit/case/presenter.ts";
import type {IMovieEntity} from "@/domain/movies/interface";

const MoviesDataWrapper = ({data}: { data: IMovieEntity }): ReactNode => {
    const {form, mutateWithReset, isPending} = useUpdateMoviesPresenter(data)
    const navigate = useNavigate();
    const handleClose = () => {
        form.reset()
        navigate(ROUTER_PATH.movies)
    }

    return (
        <Modal title="Редактирование" isOpen onClose={handleClose}>
            <MoviesForm isPending={isPending} textButton="Редактировать" form={form} onSubmit={mutateWithReset}/>
        </Modal>
    );
};

export default MoviesDataWrapper;
