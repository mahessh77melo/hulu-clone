import React, { forwardRef } from "react";
import GradeIcon from "@material-ui/icons/Grade";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";
import "../Styles/VideoCard.css";
import { base } from "../js/requests";

const VideoCard = forwardRef(({ movie }, ref) => {
	return (
		<div className="video-card" ref={ref}>
			<Link
				to={`/${movie.first_air_date ? "tv" : "movie"}/${movie.id}`}
				style={{ textDecoration: "none", color: "white" }}
			>
				<img
					className="card__image"
					src={`${base}${movie.backdrop_path || movie.poster_path}`}
					alt="poster"
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
					className="card__logo"
					alt="hulu"
					height="3.5rem"
					width="auto"
				/>
			</Link>

			<TextTruncate
				line={1}
				truncateText="..."
				text={movie.overview}
				className="card__caption"
				element="p"
			/>
			<h2 className="card__title">{movie.name ? movie.name : movie.title}</h2>
			<div className="card__statement">
				<div className="release-date">
					{movie.first_air_date || movie.release_date + "  "}
				</div>
				<div className="rating">
					User Rating : {movie.vote_average}&nbsp; <FavoriteIcon />
				</div>
				<div className="votes">
					Ratings: {movie.vote_count}&nbsp;
					<GradeIcon />
				</div>
			</div>
		</div>
	);
});

export default VideoCard;
