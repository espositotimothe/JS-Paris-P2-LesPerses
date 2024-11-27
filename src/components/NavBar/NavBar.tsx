import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
	const navigate = useNavigate();

	return (
		<>
			<nav className="navbar">
				<img src="src/images/Quizz-nuage-violet-sans-fond.png" alt="Logo" />

				<div>
					<button
						className="burger-button"
						type="button"
						onClick={() => {
							navigate("/");
						}}
					>
						Accueil
					</button>
					<button
						className="burger-button"
						type="button"
						onClick={() => {
							navigate("/Millions");
						}}
					>
						Million
					</button>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
