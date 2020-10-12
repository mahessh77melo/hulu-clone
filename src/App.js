import React, { useState } from "react";
import "./App.css";
import "./WatchList.css";
import Header from "./Header";
import Nav from "./Nav";
import { Results } from "./Results";
import Detail from "./Detail";
import { BrowserRouter as Router, Route } from "react-router-dom";
import requests, { initValue } from "./requests";
import WatchList from "./WatchList";
import Search from "./Search";

function App() {
	const [genre, setGenre] = useState(requests.fetchTrending);
	const [watchList, setWatchList] = useState(initValue);

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
					<Header />
					<WatchList watchList={watchList} setWatchList={setWatchList} />
				</Route>
				<Route path="/search">
					<Header />
					<Search />
				</Route>
			</Router>
		</div>
	);
}

export default App;
