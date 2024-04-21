import type { IMovie } from "~/types/IMovie";
import type { IMovieStore } from "~/types/IMovieStore";

enum MUTATIONS {
    SET_MOVIE_LIST= 'SET_MOVIE_LIST',
}

const mutations = {
    [MUTATIONS.SET_MOVIE_LIST]: (state: IMovieStore, movieList: IMovie[]) => {state.movieList = movieList}, 
}

export default mutations;