import type { IMovie } from "~/types/IMovie";
import type { IMovieStore } from "~/types/IMovieStore";

export enum GETTERS {
    GET_MOVIE_LIST= 'GET_MOVIE_LIST',
}

const getters = {
    [GETTERS.GET_MOVIE_LIST]: (state: IMovieStore) => state.movieList, 
}

export default getters;