import axios from "../js/axios";
import React, { useEffect, useRef, useState } from "react";
import { api_key } from "../js/requests";
import SearchIcon from "@material-ui/icons/Search";
import Person from "./Person";
import { IconButton } from "@material-ui/core";
import "../Styles/SearchPeople.css";
import "../Styles/Search.css";

const SearchPeople = () => {
	const getInitValue = () => {
		if (localStorage.searchPerson) {
			return JSON.parse(localStorage.searchPerson);
		} else {
			return [];
		}
	};
	const inputField = useRef();
	const [search, setSearch] = useState("");
	const [results, setResults] = useState(getInitValue());
	useEffect(() => {
		inputField.current.focus();
	}, []);
	const getQuery = (e) => {
		e.preventDefault();
		async function fetchResults() {
			const res = await axios.get(
				`/search/person?api_key=${api_key}&query=${search.split(" ").join("+")}`
			);
			setSearch("");
			let sortedResults = res.data.results;
			sortedResults = sortedResults.sort((a, b) => b.popularity - a.populrity);
			setResults(sortedResults);
			localStorage.searchPerson = JSON.stringify(res.data.results);
		}
		fetchResults();
	};
	// component
	return (
		<div className="search-people">
			<div className="search-bar">
				<input
					type="text"
					className="search-bar__input"
					name="search"
					ref={inputField}
					placeholder="Search for a person"
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
			<div className="search-people-results">
				{results.map((res) => (
					<Person value={res} key={res.id} />
				))}
			</div>
		</div>
	);
};

export default SearchPeople;
