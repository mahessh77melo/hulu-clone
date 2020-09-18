import React, { forwardRef } from "react";
import "./VideoCard.css";
import GradeIcon from "@material-ui/icons/Grade";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";

const VideoCard = forwardRef(({ movie }, ref) => {
	const base = "https://image.tmdb.org/t/p/original/";
	return (
		<div className="video-card" ref={ref}>
			<Link
				to={`/movie/${movie.id}`}
				style={{ textDecoration: "none", color: "white" }}
			>
				<img
					className="card__image"
					src={`${base}${movie.backdrop_path || movie.poster_path}`}
					alt="poster"
				/>
			</Link>

			<TextTruncate
				line={1}
				truncateText="..."
				text={movie.overview}
				className="card__caption"
				element="p"
			/>
			{/* <p className="card__caption">{movie.overview.slice(0, 65)}...</p> */}
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
