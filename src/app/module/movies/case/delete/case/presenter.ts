import {useDeleteMoviesRequest} from "@/app/module/movies/case/delete/case/request.ts";
import {useNavigate} from "react-router";
import {ROUTER_PATH} from "@/app/common/enum";

const useDeleteMoviesPresenter = (id?: string) => {

    const {mutateAsync, ...props} = useDeleteMoviesRequest()

    const navigate = useNavigate();
    const onSuccess = async () => {
        navigate(ROUTER_PATH.movies)
    }

    const mutateWithNavigate = async () => {
        return mutateAsync(id, {onSuccess})
    }

    return {mutateWithNavigate, ...props}
}

export {useDeleteMoviesPresenter}
