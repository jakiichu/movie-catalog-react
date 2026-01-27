import type {IMovieEntity} from "@/domain/movies/interface";


// Не создавал нового интерфейса тк тут буквально модель, а entity я позиционирую как модель
const dbInitialState: IMovieEntity[] = [
    {
        id: '2f6ac9f1-8e1b-4079-a970-138a9ce79c60',
        title: "Начало",
        genre: "Научная фантастика",
        releaseYear: "2010",
        director: "Кристофер Нолан",
        actors: ["Леонардо ДиКаприо", "Джозеф Гордон-Левитт", "Эллиот Пейдж"],
        description: "Фильм о ворах, которые проникают в сны людей, чтобы похищать идеи.",
        createdAt: new Date("2024-10-01"),
        updatedAt: new Date("2024-10-10")
    },
    {
        id: 'a715cf54-a86e-48ab-8a16-d000bd54c73a',
        title: "Интерстеллар",
        genre: "Фантастика",
        releaseYear: "2014",
        director: "Кристофер Нолан",
        actors: ["Мэттью МакКонахи", "Энн Хэтэуэй", "Джессика Честейн"],
        description: "Путешествие человечества за пределы Солнечной системы ради выживания.",
        createdAt: new Date("2024-10-03"),
        updatedAt: new Date("2024-10-12")
    },
    {
        id: '320c0af4-65ec-4fb3-ac2e-26fda87ae2c7',
        title: "Матрица",
        genre: "Киберпанк",
        releaseYear: "1999",
        director: "Лана и Лилли Вачовски",
        actors: ["Киану Ривз", "Лоренс Фишбёрн", "Кэрри-Энн Мосс"],
        description: "Программист узнаёт, что реальность — это симуляция.",
        createdAt: new Date("2024-09-20"),
        updatedAt: new Date("2024-09-25")
    },
    {
        id: '73697907-a201-45cb-be02-82345e6f5d5b',
        title: "Зелёная миля",
        genre: "Драма",
        releaseYear: "1999",
        director: "Фрэнк Дарабонт",
        actors: ["Том Хэнкс", "Майкл Кларк Дункан", "Дэвид Морс"],
        description: "История надзирателя тюрьмы и заключённого с необычным даром.",
        createdAt: new Date("2024-09-15"),
        updatedAt: new Date("2024-09-18")
    },
    {
        id: '3255d0a2-5d81-4847-b2d6-8010626e72e4',
        title: "Побег из Шоушенка",
        genre: "Драма",
        releaseYear: "1994",
        director: "Фрэнк Дарабонт",
        actors: ["Тим Роббинс", "Морган Фриман"],
        description: "История дружбы и надежды в стенах тюрьмы.",
        createdAt: new Date("2024-09-10"),
        updatedAt: new Date("2024-09-14")
    },
    {
        id: 'ad622e37-3556-4fc9-9f69-892f3f635a1d',
        title: "Форрест Гамп",
        genre: "Драма",
        releaseYear: "1994",
        director: "Роберт Земекис",
        actors: ["Том Хэнкс", "Робин Райт"],
        description: "Жизнь простого человека на фоне ключевых событий истории США.",
        createdAt: new Date("2024-08-25"),
        updatedAt: new Date("2024-08-30")
    },
    {
        id: 'e3e7493c-f380-42ab-a383-5c816dc5bcd6',
        title: "Бойцовский клуб",
        genre: "Триллер",
        releaseYear: "1999",
        director: "Дэвид Финчер",
        actors: ["Эдвард Нортон", "Брэд Питт"],
        description: "История человека, создавшего подпольный бойцовский клуб.",
        createdAt: new Date("2024-08-15"),
        updatedAt: new Date("2024-08-18")
    },
    {
        id: 'a7df8a61-ef67-423c-a064-34e38ad061d9',
        title: "Властелин колец: Братство Кольца",
        genre: "Фэнтези",
        releaseYear: "2001",
        director: "Питер Джексон",
        actors: ["Элайджа Вуд", "Иэн Маккеллен", "Вигго Мортенсен"],
        description: "Начало эпического путешествия ради уничтожения Кольца Всевластия.",
        createdAt: new Date("2024-07-20"),
        updatedAt: new Date("2024-07-25")
    },
    {
        id: 'eca3c60c-87e1-4edc-a86e-aa81b598c209',
        title: "Темный рыцарь",
        genre: "Боевик",
        releaseYear: "2008",
        director: "Кристофер Нолан",
        actors: ["Кристиан Бэйл", "Хит Леджер", "Аарон Экхарт"],
        description: "Противостояние Бэтмена и Джокера в Готэме.",
        createdAt: new Date("2024-07-10"),
        updatedAt: new Date("2024-07-15")
    },
    {
        id: 'a5d60808-28f8-43f2-ab54-5b2f2586bc38',
        title: "Гладиатор",
        genre: "Историческая драма",
        releaseYear: "2000",
        director: "Ридли Скотт",
        actors: ["Рассел Кроу", "Хоакин Феникс"],
        description: "История римского генерала, ставшего гладиатором.",
        createdAt: new Date("2024-06-30"),
        updatedAt: new Date("2024-07-05")
    }
];


export {dbInitialState};
