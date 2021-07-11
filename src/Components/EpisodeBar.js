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
				{overview ? <br></br> : ""}
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

/* 
air_date: "2009-03-08"
crew: (2) [{…}, {…}]
episode_number: 1
guest_stars: (2) [{…}, {…}]
id: 972873
name: "Seven Thirty-Seven"
overview: "Walt and Jesse are vividly reminded of Tuco’s volatile nature, and try to figure a way out of their business partnership. Hank attempts to mend fences between the estranged Marie and Skyler."
production_code: ""
season_number: 2
still_path: "/7vVujNqjP23MtPqUTBNITIW3DDA.jpg"
vote_average: 8.3
vote_count: 75
*/
