import React from "react";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import "./VideoCard.css";
import "./VertCard.css";
import GradeIcon from "@material-ui/icons/Grade";
import FavoriteIcon from "@material-ui/icons/Favorite";

const VertCard = ({ movie }) => {
	const base = "https://image.tmdb.org/t/p/original/";
	console.log(movie);
	return (
		<div className="vert-card">
			<Link
				to={`/${movie.number_of_seasons ? "tv" : "movie"}/${movie.id}`}
				style={{ textDecoration: "none", color: "white" }}
			>
				<img
					className="vert-card__image"
					src={`${base}${movie.backdrop_path || movie.poster_path}`}
					alt="poster"
				/>
				<h2 className="card__title">{movie.name ? movie.name : movie.title}</h2>
				<TextTruncate
					line={3}
					truncateText="..."
					text={movie.overview}
					className="card__caption"
					element="p"
				/>
				<div className="card__statement">
					<div className="rating">
						User Rating : {movie.vote_average}&nbsp; <FavoriteIcon />
					</div>
					<div className="votes">
						Ratings: {movie.vote_count}&nbsp;
						<GradeIcon />
					</div>
				</div>
			</Link>
		</div>
	);
};

export default VertCard;
