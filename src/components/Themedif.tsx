import { useEffect, useState } from "react";

interface Question {
	question: string;
	answer: string;
	incorrect_answers: string[];
	category: string;
	difficulty: string;
}

const Themedif = () => {
	const [data, setData] = useState<Question | null>(null);
	const [category, setCategory] = useState<string | null>(null);
	const [difficulty, setDifficulty] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const buildApiUrl = () => {
		// URL fixe de l'API
		let url = "https://quizzapi.jomoreschi.fr/api/v1/quiz";

		// Ajouter les paramètres de catégorie et difficulté si définis
		if (category) url += `?category=${category}`;
		if (difficulty)
			url += category
				? `&difficulty=${difficulty}`
				: `?difficulty=${difficulty}`;

		// biome-ignore lint/suspicious/noConsoleLog: <explanation>
		console.log("URL construite:", url); // Debug
		return url;
	};

	const fetchData = async () => {
		setLoading(true);
		setError(null);

		const apiUrl = buildApiUrl();

		// Appel à l'API avec l'URL construite
		fetch(apiUrl)
			.then((response) => {
				// Vérifie si la réponse est valide
				if (!response.ok) {
					throw new Error(`Erreur HTTP: ${response.status}`);
				}
				return response.json(); // Convertir la réponse en JSON
			})
			.then((data) => {
				// Vérifier si des questions sont présentes dans la réponse
				if (data && Array.isArray(data.results) && data.results.length > 0) {
					const randomQuestion =
						data.results[Math.floor(Math.random() * data.results.length)];
					setData(randomQuestion);
				} else {
					setError("Aucune question trouvée pour les critères sélectionnés.");
				}
			})
			.catch((error) => {
				console.error("Erreur lors de la récupération des données:", error);
				setError(
					`Erreur lors de la récupération des données: ${error.message}`,
				);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	// Appeler fetchData uniquement lorsque la catégorie et la difficulté sont définies
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (category && difficulty) {
			fetchData();
		}
	}, [category, difficulty]);

	return (
		<div>
			<h1>Quiz App</h1>

			{/* Sélection de la catégorie */}
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

			{/* Sélection de la difficulté */}
			<label>
				Difficulté :
				<select onChange={(e) => setDifficulty(e.target.value || null)}>
					<option value="">Toutes</option>
					<option value="facile">Facile</option>
					<option value="normal">Normal</option>
					<option value="difficile">Difficile</option>
				</select>
			</label>

			{/* Affichage des données, erreur ou état de chargement */}
			<div>
				{loading ? (
					<p>Chargement des données...</p>
				) : error ? (
					<p>{error}</p>
				) : data ? (
					<div
						style={{
							margin: "20px 0",
							padding: "10px",
							border: "1px solid #ccc",
						}}
					>
						<h3>{data.question}</h3>
						<p>
							<strong>Réponse :</strong> {data.answer}
						</p>
						<p>
							<strong>Catégorie :</strong> {data.category}
						</p>
						<p>
							<strong>Difficulté :</strong> {data.difficulty}
						</p>
						<p>
							<strong>Mauvaises réponses :</strong>{" "}
							{data.incorrect_answers.join(", ")}
						</p>
					</div>
				) : (
					<p>
						Sélectionnez une catégorie et une difficulté pour voir une question.
					</p>
				)}
			</div>
		</div>
	);
};

export default Themedif;
