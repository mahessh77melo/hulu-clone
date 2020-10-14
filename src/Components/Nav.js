import React from "react";
import requests from "../js/requests";
import "../Styles/Nav.css";

const Nav = ({ setGenre }) => {
	return (
		<div className="nav">
			<h2
				className="nav__item"
				onClick={() => setGenre(requests.fetchToprated)}
			>
				Top Rated
			</h2>
			<h2 className="nav__item" onClick={() => setGenre(requests.fetchAction)}>
				Action
			</h2>
			<h2 className="nav__item" onClick={() => setGenre(requests.fetchComedy)}>
				Comedy
			</h2>
			<h2 className="nav__item" onClick={() => setGenre(requests.fetchHorror)}>
				Horror
			</h2>
			<h2 className="nav__item" onClick={() => setGenre(requests.fetchRomance)}>
				Romance
			</h2>
			<h2 className="nav__item" onClick={() => setGenre(requests.fetchMystery)}>
				Mystery
			</h2>
			<h2 className="nav__item" onClick={() => setGenre(requests.fetchSciFi)}>
				Sci-fi
			</h2>
			<h2 className="nav__item" onClick={() => setGenre(requests.fetchWestern)}>
				Western
			</h2>
			<h2
				className="nav__item"
				onClick={() => setGenre(requests.fetchAnimation)}
			>
				Animation
			</h2>
			<h2 className="nav__item" onClick={() => setGenre(requests.fetchTV)}>
				TV
			</h2>
		</div>
	);
};

export default Nav;
