<template>
    <div class="movie-list">
      <MovieCard v-for="movie of movieList" :key="movie.imdbId" v-bind="movie" />
    </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import config from "~/config/config";
import { ACTIONS } from "~/store/actions";
import { GETTERS } from "~/store/getters";
const store = useStore();
const movieList = computed(() => store.getters[GETTERS.GET_MOVIE_LIST]);
if (movieList.value.length === 0) {
  await useAsyncData('movies-list', () => store.dispatch(ACTIONS.FETCH_MOVIE_LIST, 'batman'));
  // const { data: movies } = await useFetch(`${config.baseUrl}?s=batman&page=1&apikey=${config.apiKey}`);
  // store.commit(MUTATIONS.SET_MOVIE_LIST, movies.value?.Search);
}
</script>

<style scoped>
  .movie-list{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-gap: .5rem;
    align-items: flex-start;
    justify-content: center;
  }
</style>
