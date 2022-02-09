import axios from 'axios'

const MOIVE_API_URL: string = 'https://yts.mx/api/v2/list_movies.json'

export const getMovies = async (limit: number, rating: number) => {
	const res = await axios.get(`${MOIVE_API_URL}?limit=${limit}&minimum_rating=${rating}`)
	return res.data.data.movies
}
