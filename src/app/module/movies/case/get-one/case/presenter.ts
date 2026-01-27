import {useGetOneMoviesRequest} from "./request.ts";

const useGetOneMoviesPresenter = (id?: string) => {

    return useGetOneMoviesRequest(id)

}

export {useGetOneMoviesPresenter}
