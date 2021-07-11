import React, { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Results from "./Components/Results";
import Detail from "./Components/Detail";
import Seasons from "./Components/Seasons";
import { BrowserRouter as Router, Route } from "react-router-dom";
import requests, { initValue } from "./js/requests";
import WatchList from "./Components/WatchList";
import Search from "./Components/Search";
import SearchPeople from "./Components/SearchPeople";
import "./Styles/App.css";
import "./Styles/WatchList.css";
import Cast from "./Components/Cast";
import KnownForMovies from "./Components/KnownForMovies";
import SeasonDetail from "./Components/SeasonDetail";

function App() {
	const [genre, setGenre] = useState(requests.fetchAction);
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
				<Route path="/searchPeople" exact>
					<Header />
					<SearchPeople />
				</Route>
				<Route path="/searchPeople/:id/knownfor">
					<KnownForMovies />
				</Route>
				<Route path="/:mediaType/:movieID/cast" exact>
					<Cast />
				</Route>
				<Route path="/:mediaType/:movieID/seasons" exact>
					<Seasons />
				</Route>
				<Route path="/:mediaType/:movieID/seasons/season/:seasonNumber" exact>
					<SeasonDetail />
				</Route>
			</Router>
		</div>
	);
}

export default App;
