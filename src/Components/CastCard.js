import React from "react";
import "../Styles/CastCard.css";

const CastCard = ({ member }) => {
	const base = "https://image.tmdb.org/t/p/original/";

	return (
		<>
			<div className="cast-card">
				<img
					className="cast-card__backdrop"
					src={`${base}${member.profile_path}`}
					alt="Cast member"
				/>
				<div className="cast-card__detail">
					<p className="og-name">{member.name} as </p>
					<p className="movie-name">{member.character}</p>
				</div>
			</div>
		</>
	);
};

export default CastCard;
