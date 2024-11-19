import { useEffect, useState } from "react";
import type { Dispatch } from "react";
import "./Theme.css";

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
				console.error(`Erreur : ${error}`);
			}
		};

		fetchData(); // Appeler fetchData dans useEffect
	}, [category, difficulty, setData]); // Ajouter category et difficulty comme dépendances
	return (
		<div>
			<h1>Quiz App</h1>

			{/* Sélecteur pour la catégorie */}
			{step === 1 && (
				<div>
					<h1>Thématique</h1>
					<section className="category-container">
						<button
							type="button"
							onSelect={(e) =>
								setCategory((e.target as HTMLButtonElement).value || null)
							}
							value={"art_litterature"}
							onClick={() => setStep(2)}
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
							onSelect={(e) =>
								setCategory((e.target as HTMLButtonElement).value || null)
							}
							value={"tv_cinema"}
							onClick={() => setStep(2)}
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
							onSelect={(e) =>
								setCategory((e.target as HTMLButtonElement).value || null)
							}
							value={"sport"}
							onClick={() => setStep(2)}
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
							onSelect={(e) =>
								setCategory((e.target as HTMLButtonElement).value || null)
							}
							value={"jeux_videos"}
							onClick={() => setStep(2)}
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
							onSelect={(e) =>
								setCategory((e.target as HTMLButtonElement).value || null)
							}
							value={"musique"}
							onClick={() => setStep(2)}
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
							onSelect={(e) =>
								setCategory((e.target as HTMLButtonElement).value || null)
							}
							value={"culture_generale"}
							onClick={() => setStep(2)}
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
				<div>
					<button
						type="button"
						onSelect={(e) =>
							setCategory((e.target as HTMLButtonElement).value || null)
						}
						value={"facile"}
						onClick={() => setStep(3)}
					>
						Facile
					</button>

					<button
						type="button"
						onSelect={(e) =>
							setCategory((e.target as HTMLButtonElement).value || null)
						}
						value={"normal"}
						onClick={() => setStep(3)}
					>
						Normal
					</button>

					<button
						type="button"
						onSelect={(e) =>
							setCategory((e.target as HTMLButtonElement).value || null)
						}
						value={"difficile"}
						onClick={() => setStep(3)}
					>
						Difficile
					</button>
					<button type="button" onClick={() => setStep(1)}>
						Previous
					</button>
				</div>
			)}

			{/* Affiche des questions */}
		</div>
	);
};

export default Themedif;
