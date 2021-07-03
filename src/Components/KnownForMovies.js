import React, { useEffect, useState } from "react";
import axios from "../js/axios";
import { api_key } from "../js/requests";
import { useParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import "../Styles/KnownForMovies.css";

const KnownForMovies = () => {
	const { id } = useParams();
	const [detail, setDetail] = useState({});
	const [entry, setEntry] = useState([]);
	const formatDate = (date) => {
		const newDate = new Date(date);
		return newDate.toLocaleDateString(newDate);
	};

	useEffect(() => {
		async function fetchResults() {
			const resOne = await axios.get(
				`/person/${id}?api_key=${api_key}&language=en-US`
			);
			setDetail(resOne.data);
			console.log(resOne.data);
			const name = resOne.data.name;
			const res = await axios.get(
				`/search/person?api_key=${api_key}&query=${name.split(" ").join("+")}`
			);
			const getMovies = (data) => {
				let returnData;
				data.forEach((entry) => {
					if (`${entry.id}` === id) {
						returnData = entry;
					}
				});
				return returnData;
			};
			const entry = getMovies(res.data.results);
			setEntry(entry);
		}
		fetchResults();
	}, [id]);
	return (
		<div className="kfm">
			<div className="kfm__fields">
				<div className="name kfm__field">Name : {detail?.name}</div>
				<div className="kfm__field">
					NickName : {detail.also_known_as?.length && detail?.also_known_as[0]}
				</div>
				<div className="kfm__field">Born : {formatDate(detail.birthday)}</div>
				{detail.deathday ? (
					<div className="kfm__field">
						Died : {formatDate(detail?.deathday)}
					</div>
				) : (
					""
				)}

				<div className="kfm__field bio">{detail?.biography}</div>
			</div>
			<div className="movies-list">
				{entry.known_for?.map((mov) => (
					<VideoCard movie={mov} key={mov.id} />
				))}
			</div>
		</div>
	);
};

export default KnownForMovies;
