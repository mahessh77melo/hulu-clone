import React from "react";
import { Link } from "react-router-dom";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import "../Styles/Person.css";
import { base } from "../js/requests";

const Person = ({ value }) => {
	const wikiSearchName = value.name.split(" ").join("_");
	return (
		<div className="person">
			<div className="person__name">{value.name}</div>
			<a href={`https://en.wikipedia.org/wiki/${wikiSearchName}`}>
				<img
					className="person__img"
					src={
						value.profile_path
							? `${base}${value.profile_path}`
							: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
					}
					alt={value.name + "'s pic"}
				/>
			</a>
			<div className="person__role">Role : {value.known_for_department}</div>
			<Link
				to={`/searchPeople/${value.id}/knownfor`}
				style={{ textDecoration: "none", color: "white" }}
			>
				<button className="person__known-for">
					Known for
					<LiveTvIcon />
				</button>
			</Link>
		</div>
	);
};

export default Person;
