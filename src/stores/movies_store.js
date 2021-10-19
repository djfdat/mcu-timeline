import { writable } from "svelte/store"

export const movies = writable([])
const getMovies = async () => {

    const url = 'https://www.marvel.com/movies'
    const res = await fetch(url)
    console.log(res)
    // const data = await res.json()

    // console.log(data)

}

getMovies()