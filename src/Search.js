import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import PageviewSharpIcon from "@material-ui/icons/PageviewSharp";
import axios from "./axios";
import "./Search.css";
import VideoCard from "./VideoCard";
import { IconButton } from "@material-ui/core";

const Search = () => {
	const api_key = "441508ec84fd07866da08c667c78b4fb";
	const [search, setSearch] = useState("");
	const [media, setMedia] = useState("movie");
	const [results, setResults] = useState(JSON.parse(localStorage.searchRes));
	const getQuery = (e) => {
		e.preventDefault();
		async function fetchResults() {
			const res = await axios.get(
				`/search/${media}?api_key=${api_key}&query=${search
					.split(" ")
					.join("+")}`
			);
			console.log(res.data);
			setSearch("");
			setResults(res.data.results);
			localStorage.searchRes = JSON.stringify(res.data.results);
		}
		fetchResults();
	};
	const movieStyle = {
		borderTopLeftRadius: "10px",
		borderBottomLeftRadius: "10px",
		backgroundColor: media === "movie" ? "whitesmoke" : "#022b18",
		color: media === "tv" ? "whitesmoke" : "#022b18",
		outline: "None",
		boxShadow:
			media === "movie"
				? "0 -0.9rem 0.9rem rgba(0,0,0,0.6) inset,-0.5rem 0 0.9rem rgba(0,0,0,0.55) inset"
				: "none",
		border: "None",
		fontSize: "2rem",
		padding: "1.5rem",
		cursor: "pointer",
		transition: "all .2s",
		fontFamily: '"Lato",sans-serif',
		fontWeight: "500",
	};
	const tvStyle = {
		borderTopRightRadius: "10px",
		borderBottomRightRadius: "10px",
		color: media == "movie" ? "whitesmoke" : "#022b18",
		backgroundColor: media == "tv" ? "whitesmoke" : "#022b18",
		border: "None",
		boxShadow:
			media === "tv"
				? "0 -0.9rem 0.9rem rgba(0,0,0,0.6) inset,-0.5rem 0 0.9rem rgba(0,0,0,0.55) inset"
				: "none",
		fontSize: "2rem",
		outline: "None",
		padding: "1.5rem",
		cursor: "pointer",
		transition: "all .2s",
		fontFamily: '"Lato",sans-serif',
		fontWeight: "500",
	};

	return (
		<>
			<div className="search">
				<div className="search-bar">
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
					<input
						type="text"
						className="search-bar__input"
						name="search"
						placeholder={
							media === "movie" ? "Search for a Movie" : "Search for a TV Show"
						}
						onChange={(e) => {
							if (e.key !== "Enter") setSearch(e.target.value);
						}}
						onKeyPress={(e) => {
							// e.preventDefault();
							if (e.key !== "Enter") return;
							else if (e.key === "Enter" && search.length > 0) {
								console.log("enter");
								console.log(e);
								getQuery(e);
							}
						}}
						id="search"
						value={search}
					/>
					<IconButton>
						<SearchIcon onClick={getQuery} />
					</IconButton>
				</div>
				<div className="search-results">
					{results &&
						results.map((movie) =>
							movie.poster_path ? (
								<VideoCard movie={movie} key={movie.id} />
							) : (
								""
							)
						)}
				</div>
			</div>
		</>
	);
};

export default Search;