import React from "react";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import GradeIcon from "@material-ui/icons/Grade";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import "../Styles/VideoCard.css";
import "../Styles/VertCard.css";
import { base } from "../js/requests";

const VertCard = ({ movie, setWatchList }) => {
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
					line={2}
					truncateText="..."
					text={movie.overview}
					className="card__caption"
					element="p"
				/>
			</Link>

			<div className="vert-card__bottom">
				<div className="card__statement">
					<div className="rating">
						User Rating : {movie.vote_average}&nbsp; <FavoriteIcon />
					</div>
					<div className="votes">
						Ratings: {movie.vote_count}&nbsp;
						<GradeIcon />
					</div>
				</div>

				<div className="delete">
					<IconButton
						onClick={() =>
							setWatchList((prev) => {
								const newWatchList = prev.filter(
									(item) => item.idn !== movie.id
								);
								localStorage.huluWatchList = JSON.stringify(newWatchList);
								return newWatchList;
							})
						}
					>
						<DeleteIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default VertCard;
