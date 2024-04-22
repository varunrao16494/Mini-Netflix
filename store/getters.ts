import type { IMovie } from "~/types/IMovie";
import type { IMovieStore } from "~/types/IMovieStore";

export enum GETTERS {
    GET_MOVIE_LIST= 'GET_MOVIE_LIST',
    GET_VISITED_MOVIE_LIST = 'GET_VISITED_MOVIE_LIST',
}

const getters = {
    [GETTERS.GET_MOVIE_LIST]: (state: IMovieStore):IMovie[] => state.movieList, 
    [GETTERS.GET_VISITED_MOVIE_LIST]: (state: IMovieStore):IMovie[] => state.movieVisited, 
}

export default getters;