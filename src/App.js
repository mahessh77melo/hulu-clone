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
					<div style={{ marginLeft: "3rem" }} className="detail__one">
						<h2
							style={{
								color: "whitesmoke",
								fontSize: "5rem",
							}}
							className="detail__title"
						>
							{" "}
							Trending right now
						</h2>
					</div>
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
			</Router>
		</div>
	);
}

export default App;
