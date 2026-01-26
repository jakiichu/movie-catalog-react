import type {ReactNode} from 'react';
import {RouterProvider} from "react-router";
import router from "@/app/router";
import './index.scss'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

const App = (): ReactNode => {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools/>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    );
};

export default App;
