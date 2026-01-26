import type {ReactNode} from 'react';
// Тут например нам не нужен лейзи лоудинг тк мы и так и так будем его получать на всех страницах. это возможно имело бы смысл если бы у нас было http 2.0 и там очень сильно роляют микро бандлы

const MoviesBaseWrapper = (): ReactNode => {
    return (
        <div>

        </div>
    );
};

export {MoviesBaseWrapper};
