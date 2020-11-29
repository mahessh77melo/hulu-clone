import React, { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Results from "./Components/Results";
import Detail from "./Components/Detail";
import { BrowserRouter as Router, Route } from "react-router-dom";
import requests, { initValue } from "./js/requests";
import WatchList from "./Components/WatchList";
import Search from "./Components/Search";
import "./Styles/App.css";
import "./Styles/WatchList.css";
import Cast from "./Components/Cast";

function App() {
	const [genre, setGenre] = useState(requests.fetchToprated);
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
				<Route path="/trending" exact>
					<Header />
					{/* <Nav setGenre={setGenre} /> */}
					<Results genre={requests.fetchTrending} />
				</Route>
				<Route path="/watchlist" exact>
					<Header />
					<WatchList watchList={watchList} setWatchList={setWatchList} />
				</Route>
				<Route path="/search">
					<Header />
					<Search />
				</Route>
				<Route path="/:mediaType/:movieID/cast" exact>
					<Header />
					<Cast />
				</Route>
			</Router>
		</div>
	);
}

export default App;
