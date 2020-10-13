import React, { useEffect, useState } from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

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
				<div className="header__icon">
					<IconButton>
						<LiveTvIcon />
					</IconButton>
					<p className="header__icon-text">Verified</p>
				</div>
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
				<div className="header__icon">
					<IconButton>
						<PersonOutlineIcon />
					</IconButton>
					<p className="header__icon-text">Account</p>
				</div>
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
