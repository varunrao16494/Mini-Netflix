import type { IMovie } from "~/types/IMovie";
import type { IMovieDetails } from "~/types/IMovieDetails";
import type { IMovieStore } from "~/types/IMovieStore";

export enum MUTATIONS {
    SET_MOVIE_LIST= 'SET_MOVIE_LIST',
    SET_MOVIE_DETAILS='SET_MOVIE_DETAILS',
}

const mutations = {
    [MUTATIONS.SET_MOVIE_LIST]: (state: IMovieStore, movieList: IMovie[]) => {state.movieList = movieList},
    [MUTATIONS.SET_MOVIE_DETAILS]: (state: IMovieStore, movieDetails:Record<string, IMovieDetails>) => {state.movieDetails.push(movieDetails)},
}

export default mutations;