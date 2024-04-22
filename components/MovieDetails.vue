<template>
  <article class="movie">
    <section class="movie-header">
      <div class="movie-header-image">
        <img :src="movie.Poster" alt="Poster" />
      </div>
      <div class="movie-header-description">
        <h1>{{movie.Title}} - {{movie.Year}}</h1>
        <p>{{movie.Plot}}</p>
        <p>Director <strong>{{movie.Director}}</strong> <br> Actors <strong>{{movie.Actors}}</strong>
         <br> Writers <strong>{{movie.Writer}}</strong></p>
        <p class="text-primary">Award {{ movie.Awards }}</p>
        <p class="text-primary">BoxOffice {{movie.BoxOffice}}</p>
      </div>
      <div class="movie-header-details bg-primary text-light">
        <h5 class="text-center">RATINGS</h5>
        <ul>
          <li>IMDB : {{movie.imdbRating}} / Votes : {{movie.imdbVotes}}</li>
          <li v-for="rating of movie.Ratings" :key="rating.Source">{{rating.Source}} : {{rating.Value}}</li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.movie {
  &-header {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-gap: 0.5rem;
    align-items: start;
    justify-content: center;

    &-image {
      width: 270px;
      height: 400px;
      position: relative;
      margin: auto;
    }

    &-description {
      text-align: justify;
      margin: 0 10px;
      margin: 50px 20px;
    }

    &-details {
      font-weight: 400;
      font-style:italic;
      border-radius: 10px;
      box-shadow: -5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);
      margin: 50px auto;
      width: 80%
    }
  }
}
</style>


