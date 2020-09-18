import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import { Results } from "./Results";
import Detail from "./Detail";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { exp_genre } from "./Nav";
import requests from "./requests";

function App() {
	const [genre, setGenre] = useState(requests.fetchTrending);

	return (
		<div className="app">
			<Router>
				<Route path="/movie/:movieID" exact>
					<Detail />
				</Route>
				<Route path="/" exact>
					<Header />
					<Nav setGenre={setGenre} />
					<Results genre={genre} />
				</Route>
			</Router>
		</div>
	);
}

export default App;
