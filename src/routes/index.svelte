

<script>
    import { movies } from "../stores/movies_store.js";
    console.log($movies)
</script>

<h1>List of Marvel Movies</h1>

{#each movies as movie}
    <p>movie.title</p>
    <p>movie.date</p>
{/each}