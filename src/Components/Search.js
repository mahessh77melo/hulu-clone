import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import axios from "../js/axios";
import VideoCard from "./VideoCard";
import { IconButton } from "@material-ui/core";
import { api_key } from "../js/requests";
import "../Styles/Search.css";

const Search = ({ type }) => {
	const getInitValue = () => {
		if (localStorage.searchRes) {
			return JSON.parse(localStorage.searchRes);
		} else {
			return [];
		}
	};
	const inputField = useRef();
	const [search, setSearch] = useState("");
	const [media, setMedia] = useState(type || "movie");
	const [results, setResults] = useState(getInitValue());
	useEffect(() => {
		inputField.current.focus();
	}, []);
	const getQuery = (e) => {
		e.preventDefault();
		async function fetchResults() {
			const res = await axios.get(
				`/search/${media}?api_key=${api_key}&query=${search
					.split(" ")
					.join("+")}`
			);
			setSearch("");
			console.log(res.data);
			setResults(res.data.results);
			localStorage.searchRes = JSON.stringify(res.data.results);
		}
		fetchResults();
	};
	const commonStyle = {
		border: "None",
		fontSize: "2rem",
		outline: "None",
		padding: "1.5rem",
		cursor: "pointer",
		transition: "all .2s",
		fontFamily: '"Lato",sans-serif',
		fontWeight: "500",
	};
	const movieStyle = {
		borderTopLeftRadius: "10px",
		borderBottomLeftRadius: "10px",
		backgroundColor: media === "movie" ? "whitesmoke" : "#022b18",
		color: media === "tv" ? "whitesmoke" : "#022b18",
		boxShadow:
			media === "movie" ? "0 -0.9rem 0.9rem rgba(0,0,0,0.6) inset" : "none",
		...commonStyle,
	};
	const tvStyle = {
		borderTopRightRadius: "10px",
		borderBottomRightRadius: "10px",
		color: media === "movie" ? "whitesmoke" : "#022b18",
		backgroundColor: media === "tv" ? "whitesmoke" : "#022b18",
		boxShadow:
			media === "tv" ? "0 -0.9rem 0.9rem rgba(0,0,0,0.6) inset" : "none",
		...commonStyle,
	};

	return (
		<>
			<div className="search">
				<div className="search-bar">
					{type ? (
						""
					) : (
						<div className="togglers">
							<button
								onClick={() => setMedia("movie")}
								style={movieStyle}
								className="toggler"
							>
								Movie
							</button>
							<button
								onClick={() => setMedia("tv")}
								style={tvStyle}
								className="toggler"
							>
								tv
							</button>
						</div>
					)}

					<input
						type="text"
						className="search-bar__input"
						name="search"
						ref={inputField}
						placeholder={
							media === "movie"
								? "Search for a Movie"
								: media === "person"
								? "Search for a person"
								: "Search for a TV Show"
						}
						onChange={(e) => {
							if (e.key !== "Enter") setSearch(e.target.value);
						}}
						onKeyPress={(e) => {
							// e.preventDefault();
							if (e.key !== "Enter") return;
							else if (e.key === "Enter" && search.length > 0) {
								console.log(e);
								getQuery(e);
							}
						}}
						id="search"
						value={search}
					/>
					<IconButton onClick={getQuery}>
						<SearchIcon />
					</IconButton>
				</div>
				<div className="search-results">
					{results.length ? (
						results.map((movie) =>
							movie.poster_path ? (
								<VideoCard movie={movie} key={movie.id} />
							) : (
								""
							)
						)
					) : (
						<div className="no-results">
							No results found{" "}
							<span role="img" aria-label="jsx-a11y/accessible-emoji">
								😒
							</span>
							.
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Search;
