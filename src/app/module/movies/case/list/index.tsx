import {LoadComponent} from "@/app/ui/common/lazy-loading.tsx";
import {lazy} from "react";

//тут в самом последнем параметре, где див можно передавать любую верстку например скелетонов как я делал на одном из своих комерческих проектах к сожалению ссылку предсотавить не могу тк у нас сервера лежат но если они встанут к моменту собеседования готов показать
const ListMoviesRoute = LoadComponent(lazy(async () => import("./route.tsx")), <div/>)


export {ListMoviesRoute}
