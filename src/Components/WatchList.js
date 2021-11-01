import React, { useEffect, useState } from "react";
import axios from "../js/axios";
import { api_key } from "../js/requests";
import VertCard from "./VertCard";
import "../Styles/WatchList.css";

const WatchList = ({ watchList, setWatchList }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setMovies([]);
		async function getWatchList(id, media) {
			const movie = await axios.get(`${media}/${id}?api_key=${api_key}`);
			setMovies((prev) => {
				return prev.concat(movie.data);
			});
		}
		// sorting the watchlist so that it doesnt change everytime
		watchList.sort((first, second) => (first.idn > second.idn ? 1 : -1));
		watchList.forEach((item) => {
			setLoading(true);
			getWatchList(item.idn, item.mediaType);
		});
		setLoading(false);
	}, [watchList]);

	return (
		<div className="watchlist">
			{movies.length
				? movies.map((movie) => (
						<VertCard
							setWatchList={setWatchList}
							movie={movie}
							key={movie.id}
						/>
				  ))
				: !loading &&
				  !movies.length && (
						<h1 className="title">
							No Movies or tv shows in your WatchList :({" "}
						</h1>
				  )}
		</div>
	);
};

export default WatchList;
