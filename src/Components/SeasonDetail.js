import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/SeasonDetail.css";
import EpisodeBar from "./EpisodeBar";
import axios from "../js/axios";
import { base, api_key } from "../js/requests";

const SeasonDetail = () => {
	const { movieID, seasonNumber } = useParams();
	const seasonRequest = `https://api.themoviedb.org/3/tv/${movieID}/season/${seasonNumber}?api_key=${api_key}&language=en-US`;
	const [season, setSeason] = useState();
	useEffect(() => {
		const getSeason = async function () {
			console.log(`Season ${seasonNumber}`);
			const data = await axios.get(seasonRequest);
			console.log(data.data);
			setSeason(data.data);
		};
		getSeason();
	}, [seasonRequest, movieID, seasonNumber]);

	return season ? (
		<div className="season-detail">
			<div className="season-detail__header">
				<div className="season-detail__left">
					<img
						className="season-detail__poster"
						src={`${base}/${season.poster_path}`}
						alt="poster"
					/>
				</div>
				<div className="season-detail__right">
					<div className="season-detail__title">{season.name}</div>
					<div className="season-detail__overview">{season.overview}</div>
					<div className="season-detail__episodes">
						{season.episodes.map((ep) => (
							<EpisodeBar episode={ep} key={ep.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	) : (
		""
	);
};

export default SeasonDetail;
