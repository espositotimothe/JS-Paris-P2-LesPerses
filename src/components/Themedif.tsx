import React, { useEffect, useState } from "react";

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
		let url = import.meta.env.VITE_API_URL;
		if (category) url += `?category=${category}`;
		if (difficulty)
			url += category
				? `&difficulty=${difficulty}`
				: `?difficulty=${difficulty}`;
		// biome-ignore lint/suspicious/noConsoleLog: <explanation>
		console.log("URL construite:", url);
		return url;
	};

	const fetchData = async () => {
		setLoading(true);
		setError(null);
		const apiUrl = buildApiUrl();
		// biome-ignore lint/suspicious/noConsoleLog: <explanation>
		console.log("Fetching data from:", apiUrl);

		try {
			const response = await fetch(apiUrl);
			if (!response.ok) {
				throw new Error(`Erreur HTTP: ${response.status}`);
			}

			const result = await response.json();
			// biome-ignore lint/suspicious/noConsoleLog: <explanation>
			console.log("Réponse API:", result);

			if (
				result &&
				Array.isArray(result.results) &&
				result.results.length > 0
			) {
				const randomQuestion =
					result.results[Math.floor(Math.random() * result.results.length)];
				setData(randomQuestion);
			} else {
				setError("Aucune question trouvée pour les critères sélectionnés.");
				setData(null);
			}
		} catch (error) {
			console.error("Erreur lors de la récupération des données:", error);
			setError(`Erreur lors de la récupération des données: ${error.message}`);
		} finally {
			setLoading(false);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchData();
	}, [category, difficulty]);

	return (
		<div>
			<h1>Quiz App</h1>

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

			<label>
				Difficulté :
				<select onChange={(e) => setDifficulty(e.target.value || null)}>
					<option value="">Toutes</option>
					<option value="facile">Facile</option>
					<option value="normal">Normal</option>
					<option value="difficile">Difficile</option>
				</select>
			</label>

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
					<p>Aucune question trouvée pour les critères sélectionnés.</p>
				)}
			</div>
		</div>
	);
};

export default Themedif;
