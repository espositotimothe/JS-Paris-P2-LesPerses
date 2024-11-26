import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="navbar">
			<img src="src/images/Quizz-nuage-violet-sans-fond.png" alt="Logo" />

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

			<div className={`menu ${isOpen ? "open" : ""}`}>
				<a href="#accueil">Accueil</a>
				<a href="#million">Million</a>
				<a href="#aleatoire">Aléatoire</a>
			</div>
		</nav>
	);
};

export default NavBar;
