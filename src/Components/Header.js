import React, { useEffect, useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import GitHubIcon from "@material-ui/icons/GitHub";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
	const [active, setActive] = useState("Home");
	useEffect(() => {
		setActive(window.location.pathname);
	}, []);
	return (
		<div className="header">
			<div className="header__icons">
				<Link style={{ textDecoration: "none" }} to="/">
					<div className="header__icon">
						<IconButton>
							<HomeIcon />
						</IconButton>
						<p
							className="header__icon-text"
							style={{
								display: active === "/" ? "inline-block" : "none",
							}}
						>
							Home
						</p>
					</div>
				</Link>
				<Link style={{ textDecoration: "none" }} to="/trending">
					<div className="header__icon">
						<IconButton>
							<FlashOnIcon />
						</IconButton>
						<p
							className="header__icon-text"
							style={{
								display: active === "/trending" ? "inline-block" : "none",
							}}
						>
							Trending
						</p>
					</div>
				</Link>

				<Link style={{ textDecoration: "none" }} to="/watchlist">
					<div className="header__icon">
						<IconButton>
							<VideoLibraryIcon />
						</IconButton>
						<p
							className="header__icon-text"
							style={{
								display: active === "/watchlist" ? "inline-block" : "none",
							}}
						>
							Watchlist
						</p>
					</div>
				</Link>
				<Link style={{ textDecoration: "none" }} to="/search">
					<div className="header__icon">
						<IconButton>
							<SearchIcon />
						</IconButton>
						<p
							className="header__icon-text"
							style={{
								display: active === "/search" ? "inline-block" : "none",
							}}
						>
							Search
						</p>
					</div>
				</Link>
				<Link style={{ textDecoration: "none" }} to="/searchPeople">
					<div className="header__icon">
						<IconButton>
							<PeopleAltIcon />
						</IconButton>
						<p
							className="header__icon-text"
							style={{
								display: active === "/searchPeople" ? "inline-block" : "none",
							}}
						>
							People
						</p>
					</div>
				</Link>
				<a
					className="header__icon"
					href="https://github.com/mahessh77melo/hulu-clone"
				>
					<IconButton>
						<GitHubIcon />
					</IconButton>
					<p className="header__icon-text">GitHub</p>
				</a>
			</div>
			<img
				className="header__logo"
				src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
				alt=""
			/>
		</div>
	);
};

export default Header;
