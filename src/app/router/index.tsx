import {ROUTER_PATH} from "@/app/common/enum/router.ts";
import {createBrowserRouter} from "react-router";


const router = createBrowserRouter([
    {
        path: ROUTER_PATH.movies,
        element: <div/>,
    },
    {
        path: ROUTER_PATH.createMovie,
        element: <div/>,
    },
    {
        path: ROUTER_PATH.editMovie,
        element: <div/>,
    },
    {
        path: ROUTER_PATH.deleteMovie,
        element: <div/>,
    },
]);


export default router;
