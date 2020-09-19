import React, { useEffect, useState } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import { exp_results } from "./Results";
import "./Detail.css";
import StarIcon from "@material-ui/icons/Star";
import SubdirectoryArrowRightIcon from "@material-ui/icons/SubdirectoryArrowRight";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const Detail = () => {
	const { movieID } = useParams();
	const [current, setCurrent] = useState(0);
	const base = "https://image.tmdb.org/t/p/original/";
	console.log(movieID);
	useEffect(() => {
		exp_results.forEach((movie) => {
			if (movie.id == movieID) {
				console.log(`entered at id : ${movieID}`);
				setCurrent(movie);
			}
		});
	}, [movieID]);
	return (
		<div className="detail">
			<div className="detail__left">
				<img
					className="detail__poster"
					src={`${base}${current.poster_path}`}
					alt="movie"
				/>
			</div>
			<div className="detail__right">
				<div className="detail__one">
					<h1 className="detail__title">{current.title || current.name}</h1>
					<p className="detail__desc">{current.overview}</p>
				</div>

				<div className="detail__data">
					<p className="detail__pop">
						Popularity Points : {current.popularity}
					</p>
					<p className="detail__rating">
						User rating : &nbsp;{`  ${current.vote_average}/10`}
					</p>
					<p className="detail__raters">
						{" "}
						<SubdirectoryArrowRightIcon />
						{current.vote_count} ratings <StarIcon />{" "}
					</p>
					{current.origin_country ? (
						<p className="detail__country">{current.origin_country}</p>
					) : (
						""
					)}
					<p className="detail__release">
						Released On :{" "}
						{current.first_air_date || current.release_date + "  "}
					</p>
				</div>
				<div className="detail__buttons">
					<button className="btn btn-play">
						<PlayCircleOutlineIcon /> Watch Now
					</button>
					<button className="btn btn-watchlist">
						<AddCircleOutlineIcon /> Add to Watchlist
					</button>
				</div>
			</div>
		</div>
	);
};

export default Detail;
