import {ROUTER_PATH} from "@/app/common/enum/router.ts";
import {createBrowserRouter, Navigate} from "react-router";
import {ListMoviesRoute} from "@/app/module/movies/case/list";
import {CreateMoviesRoute} from "@/app/module/movies/case/create";
import {EditMoviesRoute} from "@/app/module/movies/case/edit";
import {DeleteMoviesRoute} from "@/app/module/movies/case/delete";

// добавил enum роутов тк хочется всегда знать актуальные роуты и был принцип единой правды
// ну и хочется их расположить сразу на поддомене тк вдруг я когда-нибудь захочу дописать эту шутку чтоб у меня был раздор в других модулях
const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={ROUTER_PATH.movies}/>
    },
    {
        path: ROUTER_PATH.movies,
        element: <ListMoviesRoute/>,
        children: [
            {
                path: ROUTER_PATH.createMovie,
                element: <CreateMoviesRoute/>,
            },
            {
                path: ROUTER_PATH.editMovie,
                element: <EditMoviesRoute/>,
            },
            {
                path: ROUTER_PATH.deleteMovie,
                element: <DeleteMoviesRoute/>,
            },
        ]
    },

]);


export default router;
