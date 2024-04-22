<template>
  <div>
    <MovieDetails v-if="movie" :movie="movie" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { ACTIONS } from "~/store/actions";
const { id } = useRoute().params;
const store = useStore();
const { data: movie } = await useAsyncData("movies-details", () =>
  store.dispatch(ACTIONS.FETCH_MOVIE_DETAILS, id)
);
</script>
