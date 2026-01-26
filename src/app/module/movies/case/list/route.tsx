import type {ReactNode} from 'react';
import {Outlet} from "react-router";

const Route = (): ReactNode => {
    return (
        <div>
            list
            <Outlet/>
        </div>
    );
};

export default Route;
