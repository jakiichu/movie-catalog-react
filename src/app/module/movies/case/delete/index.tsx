import {LoadComponent} from "@/app/ui/common/lazy-loading.tsx";
import {lazy} from "react";

const DeleteMoviesRoute = LoadComponent(lazy(async () => import("./route.tsx")), <div/>)


export {DeleteMoviesRoute}
