import type { IMovie } from "~/types/IMovie";
import type { IMovieStore } from "~/types/IMovieStore";
import config from "@/config/config"
import { MUTATIONS } from "./mutation";

export enum ACTIONS {
    FETCH_MOVIE_LIST= 'FETCH_MOVIE_LIST',
}

const actions = {
    async [ACTIONS.FETCH_MOVIE_LIST]({state, commit}:any, searchText: string) {
        const { data } = await useFetch(`${config.baseUrl}?s=${searchText}&page=1&apikey=${config.apiKey}`);
        if (data) {
            commit(MUTATIONS.SET_MOVIE_LIST, data);
        }
    }, 
}

export default actions;
