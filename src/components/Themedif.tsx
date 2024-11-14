import { useEffect, useState } from "react";
import type { Dispatch } from "react";
import Questions from "./quiz-components/Questions";

export interface Question {
	_id: string;
	question: string;
	answer: string;
	badAnswers: string[];
	category: string;
	difficulty: string;
	quiz: string;
}

const Themedif = ({
	setData,
	data,
}: { setData: Dispatch<Question[] | null>; data: Question[] | null }) => {
	const [category, setCategory] = useState<string | null>(null);
	const [difficulty, setDifficulty] = useState<string | null>(null);

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
			<label>
				Catégorie :
				<select onChange={(e) => setCategory(e.target.value || null)}>
					<option value="">Toutes</option>
					<option value="art_litterature">Art et Littérature</option>
					<option value="tv_cinema">Cinéma</option>
					<option value="jeux_videos">Jeux Vidéos</option>
					<option value="musique">Musique</option>
					<option value="sport">Sport</option>
				</select>
			</label>

			{/* Sélecteur pour la difficulté */}
			<label>
				Difficulté :
				<select onChange={(e) => setDifficulty(e.target.value || null)}>
					<option value="">Toutes</option>
					<option value="facile">Facile</option>
					<option value="normal">Normal</option>
					<option value="difficile">Difficile</option>
				</select>
			</label>
			<Questions data={data} setData={setData} />
		</div>
	);
};

export default Themedif;
