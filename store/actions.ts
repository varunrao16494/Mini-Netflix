import config from "@/config/config"
import { MUTATIONS } from "./mutation";
import type { IMovieDetails } from "~/types/IMovieDetails";

export enum ACTIONS {
    FETCH_MOVIE_LIST= "FETCH_MOVIE_LIST",
    FETCH_MOVIE_DETAILS="FETCH_MOVIE_DETAILS",
}

const actions = {
    async [ACTIONS.FETCH_MOVIE_LIST]({ commit}:any, searchText: string): Promise<void> {
        const movies:any = await $fetch(`${config.baseUrl}?s=${searchText}&page=1&apikey=${config.apiKey}`);
        if (movies && movies.Search.length > 0) {
            commit(MUTATIONS.SET_MOVIE_LIST, movies.Search);
        }
    }, 
    async [ACTIONS.FETCH_MOVIE_DETAILS]({ commit, state }:any, imdbID: string) {
        const movieDetails = state.movieDetails[imdbID];
        if (movieDetails) {
            return movieDetails;
        } else {
            const movies:any = await $fetch(`${config.baseUrl}?i=${imdbID}&page=1&apikey=${config.apiKey}`);
            if (movies) {
                commit(MUTATIONS.SET_MOVIE_DETAILS, {[imdbID]:movies});
                return movies;
            }
        }
    },
}

export default actions;
