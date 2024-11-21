import "./Header.css";
import { useState } from "react";
import Themedif from "../Themedif";

export default function Header() {
	const [showFilters, setShowFilters] = useState(false);
	const handleStartQuiz = () => {
		setShowFilters(true);
	};

	return (
		<>
			{!showFilters ? (
				<>
					<section className="welcome">
						<h1 className="welcome-title"> QUI VEUT DEBUGGER DES MILLIONS</h1>
					</section>

					<section className="quiz-block">
						<h2 className="quiz-title">QUIZ</h2>
						<p className="quiz-description">
							Découvrez notre sélection de quiz, incluant des classiques pour
							parfaire vos connaissances, des quiz aléatoires pour les curieux
							en quête de surprises, et un défi spécial inspiré du célèbre jeu
							télévisé, le "Qui veut gagner des millions". Seul ou entre amis,
							plongez dans l’aventure, apprenez, et relevez les défis pour
							tenter d'atteindre le score parfait.
						</p>
						<p className="quiz-description">
							Prêt à tester vos limites ? Que le jeu commence !
						</p>
						<button
							type="button"
							className="button-start"
							onClick={handleStartQuiz}
						>
							Choisis ton quiz
						</button>
					</section>
				</>
			) : (
				<Themedif />
			)}
		</>
	);
}
