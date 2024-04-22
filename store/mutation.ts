import type { IMovie } from "~/types/IMovie";
import type { IMovieDetails } from "~/types/IMovieDetails";
import type { IMovieStore } from "~/types/IMovieStore";

export enum MUTATIONS {
    SET_MOVIE_LIST= 'SET_MOVIE_LIST',
    SET_VISITED_MOVIE_LIST = 'SET_VISITED_MOVIE_LIST',
    SET_MOVIE_DETAILS='SET_MOVIE_DETAILS',
}

const mutations = {
    [MUTATIONS.SET_MOVIE_LIST]: (state: IMovieStore, movieList: IMovie[]):void => {state.movieList = movieList},
    [MUTATIONS.SET_VISITED_MOVIE_LIST]: (state: IMovieStore, movie: IMovie):void => {state.movieVisited.push(movie)},
    [MUTATIONS.SET_MOVIE_DETAILS]: (state: IMovieStore, movieDetails:Record<string, IMovieDetails>):void => {state.movieDetails = {...state.movieDetails, ...movieDetails}},
}

export default mutations;