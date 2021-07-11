import React from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/SeasonBar.css";

const SeasonBar = ({ item }) => {
	const { movieID, mediaType } = useParams();
	return (
		<Link
			to={`/${mediaType}/${movieID}/seasons/season/${item.season_number}`}
			style={{ textDecoration: "none", color: "white" }}
		>
			<div className="season-bar">
				<div className="season-bar__right">
					<div className="season-bar__title">{item.name}</div>
					<div className="season-bar__contains">
						Contains : {item.episode_count} episodes
					</div>
					<div className="season-bar__overview">{item.overview}</div>
					<div className="season-bar__aired">Aired on : {item.air_date}</div>
				</div>
			</div>
		</Link>
	);
};

export default SeasonBar;
