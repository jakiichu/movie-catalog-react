import {LoadComponent} from "@/app/ui/common/lazy-loading.tsx";
import {lazy} from "react";

const EditMoviesRoute = LoadComponent(lazy(async () => import("./route.tsx")), <div/>)


export {EditMoviesRoute}
