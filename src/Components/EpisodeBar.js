import React, { useState } from "react";
import "../Styles/EpisodeBar.css";
import StarIcon from "@material-ui/icons/Star";

const EpisodeBar = ({ episode: ep }) => {
	const [overview, setOverview] = useState(false);
	return (
		<div
			className="episode"
			onClick={() => {
				setOverview((prev) => !prev);
			}}
		>
			<div className="episode__permenant">
				<div className="episode__number">{ep.episode_number}</div>
				<div className="episode__name">{ep.name}</div>
				<div className="episode__rating">
					<StarIcon />
					{ep.vote_average}
				</div>
			</div>
			<div className="episode__overview">
				{overview ? ep.overview : ""}
				{overview ? (
					<>
						<br></br>
						<br></br>
					</>
				) : (
					""
				)}
				{overview
					? `Written by :
				${
					ep.crew?.find((member) => member.job === "Director")?.name ||
					ep.crew?.find((member) => member.known_for_department === "Writing")
						?.name ||
					"Unknown"
				}`
					: ""}
			</div>
		</div>
	);
};

export default EpisodeBar;
