import React, { useEffect, useState } from "react";
import axios from "../js/axios";
import { api_key } from "../js/requests";
import VertCard from "./VertCard";
import "../Styles/WatchList.css";

const WatchList = ({ watchList, setWatchList }) => {
	const [Movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setMovies([]);
		async function getWatchList(id, media) {
			// console.log(`/movie/${id}?api_key=${api_key}`);
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
