import React, { useEffect, useState } from "react";
import "../Styles/Similars.css";
import { useParams } from "react-router-dom";
import axios from "../js/axios";
import { api_key } from "../js/requests";
import VideoCard from "./VideoCard";

const Similars = () => {
	const { movieID, mediaType } = useParams();
	const [recs, setRecs] = useState([]);
	const [parent, setParent] = useState({});
	useEffect(() => {
		const retrieveRecs = async function () {
			const url = `${mediaType}/${movieID}/recommendations?api_key=${api_key}&language=en-US&page=1`;
			const urlTwo = `${mediaType}/${movieID}?api_key=${api_key}`;
			try {
				const returnData = await axios.get(url);
				returnData.data.results && setRecs(returnData.data.results);
				const returnedDataTwo = await axios.get(urlTwo);
				returnedDataTwo.data && setParent(returnedDataTwo.data);
			} catch (error) {
				console.error(error);
			}
		};
		retrieveRecs();
	}, [movieID, mediaType]);
	return (
		<div className="similars-container">
			<div className="similars-header">
				<h1>Recommended {mediaType === "tv" ? "TV Shows" : "Movies"}</h1>
				Since you liked {parent.name || parent.title}
			</div>
			<div className="similars-list">
				{recs.map((mov) => (
					<VideoCard movie={mov} key={mov.id} />
				))}
			</div>
		</div>
	);
};

export default Similars;
