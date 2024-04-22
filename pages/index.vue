<template>
  <section class="visited-movie text-center">
    <h1>Visited Movies</h1>
    <div class="center">
      <button class="button" v-for="movie of visitedMovies" :key="movie.imdbID">
        {{ movie.Title }}
      </button>
    </div>
  </section>
  <section class="text-center">
    <h1>Movie List</h1>
  </section>
  <section class="movie-list">
    <MovieCard
      v-for="movie of movieList"
      :key="movie.imdbId"
      v-bind="movie"
      @click="viewedMovie(movie)"
    />
  </section>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import config from "~/config/config";
import { ACTIONS } from "~/store/actions";
import { GETTERS } from "~/store/getters";
import { MUTATIONS } from "~/store/mutation";
import type { IMovie } from "~/types/IMovie";

const store = useStore();

const movieList = computed(() => store.getters[GETTERS.GET_MOVIE_LIST]);
const visitedMovies = computed(
  () => store.getters[GETTERS.GET_VISITED_MOVIE_LIST]
);

if (movieList.value.length === 0) {
  await useAsyncData("movies-list", () =>
    store.dispatch(ACTIONS.FETCH_MOVIE_LIST, "batman")
  );
  // const { data: movies } = await useFetch(`${config.baseUrl}?s=batman&page=1&apikey=${config.apiKey}`);
  // store.commit(MUTATIONS.SET_MOVIE_LIST, movies.value?.Search);
}

function viewedMovie(movie: IMovie) {
  if (visitedMovies.value.includes(movie)) {
    return;
  }
  store.commit(MUTATIONS.SET_VISITED_MOVIE_LIST, movie);
}
</script>

<style scoped>
.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 0.5rem;
  align-items: flex-start;
  justify-content: center;
}
</style>
