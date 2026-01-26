interface IGetAllMoviesForm {

    genre?: string;
    releaseYear?: number;
    createdFrom?: Date;
    createdTo?: Date;
    updatedFrom?: Date;
    updatedTo?: Date;
    search?: string;
}

export type {IGetAllMoviesForm}
