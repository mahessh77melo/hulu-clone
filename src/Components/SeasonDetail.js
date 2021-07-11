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

/* 

air_date: "2016-05-05"
episodes: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
id: 72707
name: "Series 3"
overview: "The action has moved on two years to 1924 and as Tommy starts married life he is more determined than ever to go legitimate and keep his family safe. But he finds himself pulled into a web of intrigue more lethal than anything he has yet encountered."
poster_path: "/1AjIcMZnRSuaAMn6Ajsv8mZfUu.jpg"
season_number: 3
_id: "567064f992514169e2013760"*/
