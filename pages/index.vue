<template>
    <div class="container movie-list">
    <MovieCard v-for="movie of movieList" :key="movie.imdbId" v-bind="movie" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import config from "~/config/config";
import { GETTERS } from "~/store/getters";
import { MUTATIONS } from "~/store/mutation";
const store = useStore();
const movieList = computed(() => store.getters[GETTERS.GET_MOVIE_LIST]);
console.log(movieList.value);
if (movieList.value.length === 0) {
  const { data: movies } = await useFetch(`${config.baseUrl}?s=batman&page=1&apikey=${config.apiKey}`);
  store.commit(MUTATIONS.SET_MOVIE_LIST, movies.value.Search);
}
</script>

<style scoped>
  .movie-list{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
    grid-gap: .5rem;
    align-items: flex-start;
    justify-content: center;
    width: 100vw;
  }
</style>
