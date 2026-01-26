import type {ReactNode} from 'react';
import {RouterProvider} from "react-router";
import router from "@/app/router";

const App = (): ReactNode => {
    return (
        <RouterProvider router={router}/>
    );
};

export default App;
