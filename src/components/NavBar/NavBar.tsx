import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen); // Bascule l'état du menu
	};

	return (
		<nav className="navbar">
			<img src="src/images/Quizz-nuage-violet-sans-fond.png" alt="Logo" />

			{/* Menu burger, uniquement visible si isOpen est true */}
			<div
				className="burger"
				onClick={toggleMenu} // Clic pour ouvrir/fermer le menu
				onKeyDown={(e) =>
					e.key === "Enter" || e.key === " " ? toggleMenu() : null
				} // Clavier (Enter/Espace)
			>
				<div className="bar" />
				<div className="bar" />
				<div className="bar" />
			</div>

			{/* Menu qui s'affiche lorsque isOpen est true */}
			<div className={`menu ${isOpen ? "open" : ""}`}>
				<a href="#accueil">Accueil</a>
				<a href="#million">Million</a>
				<a href="#aleatoire">Aléatoire</a>
			</div>
		</nav>
	);
};

export default NavBar;
