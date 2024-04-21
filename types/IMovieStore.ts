import type { IMovie } from "./IMovie";
import type { IMovieDetails } from "./IMovieDetails";

export interface IMovieStore {
    movieList: IMovie[],
    movieVisited: IMovie[],
    movieDetails: Record<string, IMovieDetails>[],
}