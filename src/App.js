import React, { useState } from "react";
import "./App.css";
import "./WatchList.css";
import Header from "./Header";
import Nav from "./Nav";
import { Results } from "./Results";
import Detail from "./Detail";
import { BrowserRouter as Router, Route } from "react-router-dom";
import requests from "./requests";
import WatchList from "./WatchList";

function App() {
	const [genre, setGenre] = useState(requests.fetchTrending);
	const [watchList, setWatchList] = useState([
		{ idn: 497582, mediaType: "movie" },
		{ idn: 76479, mediaType: "tv" },
		{ idn: 499932, mediaType: "movie" },
		{ idn: 337401, mediaType: "movie" },
		{ idn: 737568, mediaType: "movie" },
		{ idn: 155, mediaType: "movie" },
		{ idn: 680, mediaType: "movie" },
	]);

	return (
		<div className="app">
			<Router>
				<Route path="/:mediaType/:movieID" exact>
					<Detail watchList={watchList} setWatchList={setWatchList} />
				</Route>
				<Route path="/" exact>
					<Header />
					<Nav setGenre={setGenre} />
					<Results genre={genre} />
				</Route>
				<Route path="/watchlist" exact>
					<WatchList watchList={watchList} setWatchList={setWatchList} />
				</Route>
			</Router>
		</div>
	);
}

export default App;
