import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "../js/axios";
import { api_key, base } from "../js/requests";
import "../Styles/Seasons.css";
import SeasonBar from "./SeasonBar";

const Seasons = () => {
	const { movieID, mediaType } = useParams();
	const [current, setCurrent] = useState();
	useEffect(() => {
		async function getCurrent(id, media) {
			try {
				const movie = await axios.get(`${media}/${id}?api_key=${api_key}`);
				setCurrent(movie.data);
			} catch (error) {
				console.log(error);
			}
		}
		getCurrent(movieID, mediaType);
	}, [movieID, mediaType]);
	return current ? (
		<div
			className="seasons"
			style={{
				backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.75),rgba(0,0,0,0.85)), url(${base}/${current.backdrop_path})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="seasons__title">{current.title || current.name}</div>
			{current.seasons?.map((season) => (
				<SeasonBar item={season} key={season.season_number} />
			))}
		</div>
	) : (
		""
	);
};

export default Seasons;
