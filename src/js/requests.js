export const api_key = "441508ec84fd07866da08c667c78b4fb";
export const base = "https://image.tmdb.org/t/p/original/";

export default {
	fetchTrending: `/trending/all/week?api_key=${api_key}&langauge=en-US`,
	fetchToprated: `/movie/top_rated?api_key=${api_key}&langauge=en-US`,
	fetchAction: `/discover/movie?api_key=${api_key}&with_genres=28`,
	fetchComedy: `/discover/movie?api_key=${api_key}&with_genres=35`,
	fetchHorror: `/discover/movie?api_key=${api_key}&with_genres=27`,
	fetchRomance: `/discover/movie?api_key=${api_key}&with_genres=10749`,
	fetchMystery: `/discover/movie?api_key=${api_key}&with_genres=9648`,
	fetchSciFi: `/discover/movie?api_key=${api_key}&with_genres=878`,
	fetchWestern: `/discover/movie?api_key=${api_key}&with_genres=37`,
	fetchAnimation: `/discover/movie?api_key=${api_key}&with_genres=16`,
	fetchTV: `/discover/movie?api_key=${api_key}&with_genres=10770`,
};
export const initValue =
	JSON.parse(localStorage.getItem("huluWatchList")) || [];
