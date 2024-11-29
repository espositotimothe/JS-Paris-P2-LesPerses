import { useEffect, useState } from "react";
import type { Dispatch } from "react";
import Questions from "./quiz-components/Questions";
import "./Theme.css";
import "./Difficulty.css";
import retour from "../images/Back-sans-fond.png";
import cinema from "../images/Logo-cinéma-sans-fond.png";
import artetlitterature from "../images/Logo-littérature-sans-fond.png";
import sport from "../images/Logo-sport-ballon-sans-fond.png";
import difficile from "../images/difficile.png";
import facile from "../images/facile.png";
import culturegenerale from "../images/logo-cultureG-sans-fond.png";
import jeuxvideos from "../images/logo-jeux_vidéos-sans-fond.png";
import musique from "../images/logo-musique-sans-fond.png";
import moyen from "../images/moyen.png";

export interface Question {
	_id: string;
	question: string;
	answer: string;
	badAnswers: string[];
	category: string;
	difficulty: "facile" | "normal" | "difficile";
	quiz: string;
}

const Themedif = ({
	setData,
	data,
}: { setData: Dispatch<Question[] | null>; data: Question[] | null }) => {
	const [category, setCategory] = useState<string | null>(null);
	const [difficulty, setDifficulty] = useState<string | null>(null);
	const [step, setStep] = useState(1);

	useEffect(() => {
		// Fonction pour construire l'URL filtrée avec les paramètres
		const buildApiUrl = () => {
			let url = import.meta.env.VITE_API_URL; // URL de base de l'API

			if (category) {
				url += `?category=${category}`;
			}

			if (difficulty) {
				url += category
					? `&difficulty=${difficulty}`
					: `?difficulty=${difficulty}`;
			}

			return url;
		};

		// Fonction pour récupérer les données depuis l'API
		const fetchData = async () => {
			const apiUrl = buildApiUrl();

			try {
				const response = await fetch(apiUrl);
				if (!response.ok) {
					throw new Error(`Erreur HTTP: ${response.status}`);
				}

				const result = await response.json();

				if (
					result &&
					Array.isArray(result.quizzes) &&
					result.quizzes.length > 0
				) {
					setData(result.quizzes);
				}
			} catch (error) {
				console.error(`Erreur lors du fetch : ${error}`); // Log des erreurs
			}
		};

		fetchData(); // Appeler fetchData dans useEffect
	}, [category, difficulty, setData]); // Ajouter category et difficulty comme dépendances

	return (
		<div>
			{/* Sélecteur pour la catégorie */}
			{step === 1 && (
				<div>
					<h1 className="thematique">THÉMATIQUES</h1>
					<section className="container">
						<section className="category-container">
							<button
								type="button"
								onClick={() => {
									setCategory("art_litterature");
									setStep(2);
								}}
								className="category-button"
							>
								Art litterature
								<img
									src={artetlitterature}
									alt="Art et litterature"
									className="category-img-size"
								/>
							</button>
							<button
								type="button"
								onClick={() => {
									setCategory("tv_cinema");
									setStep(2);
								}}
								className="category-button"
							>
								Cinema
								<img src={cinema} alt="Cinema" className="category-img-size" />
							</button>
						</section>
						<section className="category-container">
							<button
								type="button"
								onClick={() => {
									setCategory("sport");
									setStep(2);
								}}
								className="category-button"
							>
								Sport
								<img src={sport} alt="Sport" className="category-img-size" />
							</button>
							<button
								type="button"
								onClick={() => {
									setCategory("jeux_videos");
									setStep(2);
								}}
								className="category-button"
							>
								Jeux videos
								<img
									src={jeuxvideos}
									alt="Jeux videos"
									className="category-img-size"
								/>
							</button>
						</section>
						<section className="category-container">
							<button
								type="button"
								onClick={() => {
									setCategory("musique");
									setStep(2);
								}}
								className="category-button"
							>
								Musique
								<img
									src={musique}
									alt="Musique"
									className="category-img-size"
								/>
							</button>
							<button
								type="button"
								onClick={() => {
									setCategory("culture_generale");
									setStep(2);
								}}
								className="category-button"
							>
								Culture generale
								<img
									src={culturegenerale}
									alt="Culture generale"
									className="category-img-size"
								/>
							</button>
						</section>
					</section>
				</div>
			)}

			{/* Sélecteur pour la difficulté */}
			{step === 2 && (
				<div className="difficulty">
					<h1 className="difficulte">DIFFICULTÉ</h1>
					<div className="choice">
						<button
							type="button"
							className="choice-btn"
							onClick={() => {
								setDifficulty("facile");
								setStep(3);
							}}
						>
							<img src={facile} alt="facile" />
						</button>
						<button
							type="button"
							className="choice-btn"
							onClick={() => {
								setDifficulty("normal");
								setStep(3);
							}}
						>
							<img src={moyen} alt="normal" />
						</button>
						<button
							type="button"
							className="choice-btn"
							onClick={() => {
								setDifficulty("difficile");
								setStep(3);
							}}
						>
							<img src={difficile} alt="difficile" />
						</button>
					</div>

					<div className="back">
						<button
							type="button"
							onClick={() => setStep(1)}
							className="back-image"
						>
							<img src={retour} alt="facile" />
						</button>
					</div>
				</div>
			)}

			{step === 3 && (
				<>
					<Questions data={data} />

					<div className="back">
						<button
							type="button"
							onClick={() => setStep(2)}
							className="back-image"
						>
							<img src={retour} alt="cool-man" />
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Themedif;
