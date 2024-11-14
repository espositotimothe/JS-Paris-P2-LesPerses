import { useEffect, useState } from "react";

interface Question {
	question: string;
	answer: string;
	badAnswers: string[];
	category: string;
	difficulty: string;
	quiz: string;
}

const Themedif = () => {
	const [data, setData] = useState<Question | null>(null);
	const [category, setCategory] = useState<string | null>(null);
	const [difficulty, setDifficulty] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// Fonction pour construire l'URL filtrée avec les paramètres
		const buildApiUrl = () => {
			let url = import.meta.env.VITE_API_URL; // URL de base de l'API

			// Ajouter la catégorie à l'URL si elle est définie
			if (category) {
				url += `?category=${category}`;
			}

			// Ajouter la difficulté à l'URL si elle est définie
			if (difficulty) {
				url += category
					? `&difficulty=${difficulty}`
					: `?difficulty=${difficulty}`;
			}

			return url;
		};

		// Fonction pour récupérer les données depuis l'API
		const fetchData = async () => {
			setLoading(true);
			setError(null);

			const apiUrl = buildApiUrl(); // Construire l'URL

			try {
				const response = await fetch(apiUrl);

				// Vérification de la réponse
				if (!response.ok) {
					throw new Error(`Erreur HTTP: ${response.status}`);
				}

				const result = await response.json();

				// Si des questions sont présentes dans le résultat
				if (
					result &&
					Array.isArray(result.quizzes) &&
					result.quizzes.length > 0
				) {
					// Récupérer une question aléatoire
					const randomQuestion =
						result.quizzes[Math.floor(Math.random() * result.quizzes.length)];

					// Mettre à jour l'état avec la question récupérée
					setData(randomQuestion);
				} else {
					setError("Aucune question trouvée pour les critères sélectionnés.");
					setData(null);
				}
			} catch (error) {
				setError(`Error: ${error}`); // Utiliser err.message pour afficher l'erreur
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [category, difficulty]); // Ajouter category et difficulty comme dépendances

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

			<div>
				{/* Affichage du statut de chargement */}
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
							<strong>Mauvaises réponses :</strong> {data.badAnswers.join(", ")}
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
