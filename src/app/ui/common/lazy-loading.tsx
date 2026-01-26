import {type FC, memo, type NamedExoticComponent, type ReactNode, Suspense} from "react";
// вот вот эта зпиятая тут находится не    ✓ нужно это чтоб можно было разлечить компонент верстки от компонента дженерика
const LoadComponent = <Props extends object, >(Component: FC<Props>, fallback: ReactNode): NamedExoticComponent<Props> => memo((props) => (
    <Suspense fallback={fallback}>
        <Component {...props} />
    </Suspense>
))

export {LoadComponent};
