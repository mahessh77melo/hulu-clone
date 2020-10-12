import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import FlipMove from "react-flip-move";

const Results = ({ genre }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		console.log("genre " + genre);
		async function loadResults() {
			const results = await axios.get(genre);
			console.log(genre);
			console.log(results.data.results);
			setMovies(results.data.results);
		}
		loadResults();
	}, [genre]);

	return (
		<div className="results">
			<FlipMove
				appearAnimation="fade"
				enterAnimation="fade"
				leaveAnimation="elevator"
			>
				{movies.map((movie) => (
					<VideoCard movie={movie} key={movie.id} />
				))}
			</FlipMove>
		</div>
	);
};

export { Results };
