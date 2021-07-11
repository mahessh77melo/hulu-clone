import React, { useEffect, useState } from "react";
import "../Styles/Detail.css";
import { useParams } from "react-router-dom";
import axios from "../js/axios";
import { Link } from "react-router-dom";
import createRipple from "../js/createRipple";
import StarIcon from "@material-ui/icons/Star";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SubdirectoryArrowRightIcon from "@material-ui/icons/SubdirectoryArrowRight";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { api_key, base } from "../js/requests";
import { IconButton } from "@material-ui/core";

const Detail = ({ watchList, setWatchList }) => {
	const { movieID, mediaType } = useParams();
	const [current, setCurrent] = useState();
	useEffect(() => {
		async function getCurrent(id, media) {
			try {
				const movie = await axios.get(`${media}/${id}?api_key=${api_key}`);
				setCurrent(movie.data);
			} catch (error) {
				console.log(error);
			}
		}
		getCurrent(movieID, mediaType);
	}, [movieID, mediaType]);

	const LinkStyles = {
		textDecoration: "none",
		marginLeft: "3rem",
		color: "whitesmoke",
		fontSize: "4rem",
	};

	return current ? (
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
					{current.runtime && (
						<p className="detail__country">Run-time : {current.runtime} mins</p>
					)}
					<p className="detail__release">
						Released On :{" "}
						{current.first_air_date || current.release_date + "  "}
					</p>
				</div>
				<div className="detail__buttons">
					{mediaType === "movie" ? (
						<button
							className="btn btn-play"
							onClick={() => {
								alert(
									`Did you seriously think you can watch ${
										current.title || current.name
									} for free?? 🤣🤣 Come on now!!!`
								);
							}}
						>
							<PlayCircleOutlineIcon /> Watch Now
						</button>
					) : (
						<Link
							to={`/${mediaType}/${movieID}/seasons`}
							style={{ textDecoration: "none", color: "white" }}
						>
							<button className="btn btn-watchlist">
								<PlayCircleOutlineIcon /> Seasons
							</button>
						</Link>
					)}
					{watchList.filter((item) => item.idn === current.id).length ? (
						<button className="btn btn-added">
							<CheckCircleIcon /> Added to Watchlist
						</button>
					) : (
						<button
							className="btn btn-watchlist"
							onClick={(event) => {
								createRipple(event);
								setWatchList((prev) => {
									console.log(prev);
									const newWatchList = prev.concat({
										idn: current.id,
										mediaType: mediaType,
									});
									localStorage.huluWatchList = JSON.stringify(newWatchList);
									return newWatchList;
								});
							}}
						>
							<AddCircleOutlineIcon /> Add to Watchlist
						</button>
					)}
					<Link
						to={`/${mediaType}/${movieID}/cast`}
						style={{ textDecoration: "none" }}
					>
						<button
							onClick={(event) => createRipple(event)}
							className="btn btn-cast"
						>
							<SupervisorAccountIcon />
							Cast
						</button>
					</Link>
					<Link to="/watchlist">
						<IconButton>
							<VideoLibraryIcon style={LinkStyles} />
						</IconButton>
					</Link>
				</div>
			</div>
		</div>
	) : (
		"API failed to send back Data"
	);
};

export default Detail;
