import React, { useState } from "react";
import "./NavBar.css";
import UnderConstruction from "../UnderConstruction";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showUnderConstruction, setShowUnderConstruction] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleClick = () => {
		setShowUnderConstruction(true);
	};

	return (
		<>
			<nav className="navbar">
				<img src="src/images/Quizz-nuage-violet-sans-fond.png" alt="Logo" />

				{}
				<div
					className="burger"
					onClick={toggleMenu}
					onKeyDown={(e) =>
						e.key === "Enter" || e.key === " " ? toggleMenu() : null
					}
				>
					<div className="bar" />
					<div className="bar" />
					<div className="bar" />
				</div>

				{}
				<div className={`menu ${isOpen ? "open" : ""}`}>
					<button className="burger-button" type="button" onClick={handleClick}>
						Million
					</button>
					<button className="burger-button" type="button" href="#aleatoire">
						Aléatoire
					</button>
				</div>
			</nav>
			{showUnderConstruction && <UnderConstruction />}
		</>
	);
};

export default NavBar;
