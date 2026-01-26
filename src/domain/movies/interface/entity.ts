//тут базовая сущность (типа модели на бекенде) от которой уже будут строиться вложенные интерфейсы
interface IMovieEntity {
    id: string;                 // от себя уже добавил
    title: string;              // название
    genre: string;              // жанр
    releaseYear: number;        // год выпуска
    director: string;           // режиссер
    actors: string[];           // актеры
    description?: string;       // аннотация (если имеется)
    createdAt: Date;            // дата добавления в каталог
    updatedAt: Date;            // дата обновления в каталоге
}


export type {IMovieEntity};
