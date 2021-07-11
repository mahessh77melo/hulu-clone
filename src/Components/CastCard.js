import React from "react";
import { base } from "../js/requests";
import "../Styles/CastCard.css";

const CastCard = ({ member }) => {
	const wikiSearchName = member.name.split(" ").join("_");

	return (
		<>
			<a
				className="cast-card"
				href={`https://en.wikipedia.org/wiki/${wikiSearchName}`}
			>
				<img
					className="cast-card__backdrop"
					src={`${base}${member.profile_path}`}
					alt="Cast member"
				/>
				<div className="cast-card__detail">
					<p className="og-name">{member.name} as </p>
					<p className="movie-name">{member.character}</p>
				</div>
			</a>
		</>
	);
};

export default CastCard;
