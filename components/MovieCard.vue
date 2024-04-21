<template>
    <article class="movie-container">
			<div class="poster-container">
                <NuxtLink :to="`/movie/${imdbID}`">
                    <img :src="Poster" class="poster" />
                </NuxtLink>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">{{Title}}</h4>
					<p class="ticket__current-price">{{Year}}</p>
				</div>
			</div>
	</article>
</template>

<script setup>
    const props = defineProps({
        Title: {
            type: String,
            required: true,
        },
        Year: {
            type: String,
            required: true,
        },
        imdbID: {
            type: String,
            required: true,
        },
        Poster: {
            type: String,
            required: true,
        },
    })
</script>

<style scoped>
.movie-container {
	width: 250px;
	height: 540px;
	position: relative;
	margin: 0 auto;
}

.poster-container {
	width: 230px;
	position: absolute;
	top: 0;
	left: 20px;
	z-index: 1;
}

.poster {
	width: 100%;
	box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
}

.ticket-container {
	background: #fff;
	width: 270px;
	height: 450px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 5px;
	position: absolute;
	top: 20px;
	box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
}

.ticket__content {
	width: 100%;
	position: absolute;
	bottom: 0;
	text-align: center;
}

.ticket__movie-title {
	text-transform: uppercase;
	margin-bottom: 5px;
}

.ticket__current-price {
	color: #69c982;
	font-size: 1.4rem;
	font-weight: bold;
}


</style>