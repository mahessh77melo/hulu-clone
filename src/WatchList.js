import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./WatchList.css";
import VertCard from "./VertCard";

const WatchList = ({ watchList }) => {
	const api_key = "441508ec84fd07866da08c667c78b4fb";
	console.log(watchList);
	const [Movies, setMovies] = useState([]);
	useEffect(() => {
		async function getWatchList(id, media) {
			console.log(`/movie/${id}?api_key=${api_key}`);
			const movie = await axios.get(`${media}/${id}?api_key=${api_key}`);
			setMovies((prev) => {
				return prev.concat(movie.data);
			});
		}
		watchList.forEach((item) => {
			getWatchList(item.idn, item.mediaType);
		});
	}, [watchList]);
	console.log(Movies);

	return (
		<div className="watchlist">
			{Movies.map((movie) => (
				<VertCard movie={movie} key={movie.id} />
			))}
		</div>
	);
};

export default WatchList;
