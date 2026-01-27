import {z} from "zod";

const movieSchema = z.object({
    id: z.uuid(),

    title: z
        .string()
        .min(1, {error: "Название фильма обязательно"})
        .max(200, {error: "Слишком длинное название"}),

    genre: z
        .string("Жанр обязателен")
        .min(1, {error: "Жанр обязателен"})
        .max(100, {error: "Слишком длинный жанр"}),

    releaseYear: z
        .string()
        .regex(/^\d{4}$/, {error: "Год выпуска должен состоять из 4 цифр"}),

    director: z
        .string()
        .min(1, {error: "Режиссер обязателен"})
        .max(100, {error: "Слишком длинное имя режиссера"}),

    actors: z
        .array(z.string({error: "Имя актера не может быть пустым"}).min(1, {error: "Имя актера не может быть пустым"}))
        .min(1, {error: "Добавьте хотя бы одного актера"}),

    description: z
        .string()
        .max(1000, {error: "Описание слишком длинное"})
        .optional(),

    createdAt: z.date(),
    updatedAt: z.date(),
});
export {
    movieSchema
}
