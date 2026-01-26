// Не использую тут enum тк он при билде бред собирает и в сообществе его не взлюбили

const ROUTER_PATH = {
    movies: '/movies',
    createMovie: '/movies/create',
    editMovie: '/movies/edit/:id',
    deleteMovie: '/movies/delete/:id',
} as const;

export {
    ROUTER_PATH,
}
