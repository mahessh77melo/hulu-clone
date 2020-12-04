import React, { useEffect, useState } from "react";
import "../Styles/Cast.css";
import { useParams } from "react-router-dom";
import axios from "../js/axios";
import { api_key } from "../js/requests";
import CastCard from "./CastCard";

const Cast = () => {
	const [cast, setCast] = useState();
	const [crew, setCrew] = useState();
	const [movie, setMovie] = useState();
	const { mediaType: media, movieID: id } = useParams();
	useEffect(() => {
		const getCast = async () => {
			const creditsRaw = await axios.get(
				`${media}/${id}/credits?api_key=${api_key}`
			);
			const movieRaw = await axios.get(`${media}/${id}?api_key=${api_key}`);
			setCast(creditsRaw.data.cast);
			setCrew(creditsRaw.data.crew);
			setMovie(movieRaw.data);
		};
		getCast();
	}, [media, id]);

	return (
		<div className="cast-container">
			<h1 className="title">
				{" "}
				Casting of{" "}
				{movie?.title ||
					movie?.original_title ||
					movie?.name ||
					movie?.original_name}
			</h1>
			<h3 className="title director">
				Director :{" "}
				{crew?.find((member) => member.job === "Director")?.name ||
					crew?.find((member) => member.known_for_department === "Writing")
						?.name ||
					"Unknown"}
			</h3>
			{cast?.map(
				(member) =>
					member.profile_path && <CastCard key={member.id} member={member} />
			)}
		</div>
	);
};

export default Cast;
