import { useEffect, useState } from "react";
import type { Dispatch } from "react";
import Questions from "./quiz-components/Questions";
import "./Theme.css";
import "./Difficulty.css";

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
					<h1>Thématique</h1>
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
								src="src\images\Logo-littérature-sans-fond.png"
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
							<img
								src="src\images\Logo-cinéma-sans-fond.png"
								alt="Cinema"
								className="category-img-size"
							/>
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
							<img
								src="src\images\Logo-sport-ballon-sans-fond.png"
								alt="Sport"
								className="category-img-size"
							/>
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
								src="src\images\logo-jeux_vidéos-sans-fond.png"
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
								src="src\images\logo-musique-sans-fond.png"
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
								src="src/images/logo-cultureG-sans-fond.png"
								alt="Culture generale"
								className="category-img-size"
							/>
						</button>
					</section>
				</div>
			)}

			{/* Sélecteur pour la difficulté */}
			{step === 2 && (
				<div className="difficulty">
					<h1>Difficulté</h1>
					<div className="choice">
						<button
							type="button"
							onClick={() => {
								setDifficulty("facile");
								setStep(3);
							}}
						>
							<img src="src\images\1etoile-sans-fond.png" alt="facile" />
						</button>
						<button
							type="button"
							onClick={() => {
								setDifficulty("normal");
								setStep(3);
							}}
						>
							<img src="src\images\2etoiles-sans-fond.png" alt="normal" />
						</button>
						<button
							type="button"
							onClick={() => {
								setDifficulty("difficile");
								setStep(3);
							}}
						>
							<img src="src\images\3etoiles-sans-fond.png" alt="difficile" />
						</button>
					</div>

					<div className="back">
						<button type="button" onClick={() => setStep(1)}>
							<img src="src\images\Back-sans-fond.png" alt="facile" />
						</button>
					</div>
				</div>
			)}

			{/* Affiche des questions */}
			{step === 3 && <Questions data={data} setData={setData} />}
		</div>
	);
};

export default Themedif;
