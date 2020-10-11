import React, { useEffect, useState } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import axios from "./axios";
import "./Detail.css";
import StarIcon from "@material-ui/icons/Star";
import SubdirectoryArrowRightIcon from "@material-ui/icons/SubdirectoryArrowRight";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const Detail = ({ setWatchList }) => {
	const { movieID, mediaType } = useParams();
	const api_key = "441508ec84fd07866da08c667c78b4fb";
	const [current, setCurrent] = useState(4);
	const base = "https://image.tmdb.org/t/p/original/";
	console.log(movieID);
	useEffect(() => {
		async function getCurrent(id, media) {
			const movie = await axios.get(`${media}/${id}?api_key=${api_key}`);
			setCurrent(movie.data);
		}
		getCurrent(movieID, mediaType);
	}, [movieID, mediaType]);
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
						<p className="detail__country">
							Country : {current.origin_country}
						</p>
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
					<button
						className="btn btn-watchlist"
						onClick={() => {
							setWatchList((prev) => {
								console.log(prev);
								return prev.concat({
									idn: current.id,
									mediaType: current.media_type ? current.mediaType : "movie",
								});
							});
						}}
					>
						<AddCircleOutlineIcon /> Add to Watchlist
					</button>
				</div>
			</div>
		</div>
	);
};

export default Detail;
