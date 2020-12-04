import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "../js/axios";
import FlipMove from "react-flip-move";
import "../Styles/Results.css";

const Results = ({ genre }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function loadResults() {
			const results = await axios.get(genre);
			setMovies(results.data.results);
		}
		loadResults();
	}, [genre]);

	return (
		movies.length && (
			<div className="results">
				<FlipMove enterAnimation="accordionVertical" leaveAnimation="fade">
					{movies.map((movie) => (
						<VideoCard movie={movie} key={movie.id} />
					))}
				</FlipMove>
			</div>
		)
	);
};

export default Results;
