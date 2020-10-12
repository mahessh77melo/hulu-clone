import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./WatchList.css";
import VertCard from "./VertCard";

const WatchList = ({ watchList, setWatchList }) => {
	const api_key = "441508ec84fd07866da08c667c78b4fb";
	console.log(watchList);
	const [Movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setMovies([]);
		async function getWatchList(id, media) {
			console.log(`/movie/${id}?api_key=${api_key}`);
			const movie = await axios.get(`${media}/${id}?api_key=${api_key}`);
			setMovies((prev) => {
				return prev.concat(movie.data);
			});
		}
		watchList.forEach((item) => {
			setLoading(true);
			getWatchList(item.idn, item.mediaType);
		});
		setLoading(false);
	}, [watchList]);
	console.log(Movies);

	return (
		<div className="watchlist">
			{Movies.length
				? Movies.map((movie) => (
						<VertCard
							setWatchList={setWatchList}
							movie={movie}
							key={movie.id}
						/>
				  ))
				: !loading &&
				  !Movies.length && (
						<h1 className="title">
							No Movies or tv shows in your WatchList :({" "}
						</h1>
				  )}
		</div>
	);
};

export default WatchList;
