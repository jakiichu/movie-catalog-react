import {LoadComponent} from "@/app/ui/common/lazy-loading.tsx";
import {lazy} from "react";
// Нужно для кодсплитинга чтоб при первом входе код у нас не со всех страниц подтягивался а только с этой


const CreateMoviesRoute = LoadComponent(lazy(async () => import("src/app/module/movies/case/create/route.tsx")), <div/>)


export {CreateMoviesRoute}
