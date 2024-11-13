import { useEffect, useState } from "react";
import Options from "./Options";
// import NextButton from "./NextButton";

type Quiz = {
	_id: string;
	question: string;
	answer: string;
	badAnswers: string[];
	category: string;
	difficulty: "facile" | "normal" | "difficile";
};

export default function Question() {
	const [quiz, setQuiz] = useState<Quiz | null>(null);

	useEffect(() => {
		fetch("https://quizzapi.jomoreschi.fr/api/v1/quiz")
			.then((response) => response.json())
			.then((data) => {
				if (Array.isArray(data.quizzes) && data.quizzes.length > 0) {
					setQuiz(data.quizzes[0]);
				} else {
					console.error("Aucun quiz trouvé");
				}
			})
			.catch((error) =>
				console.error("Erreur lors de la récupération du quiz :", error),
			);
	}, []);

	const quizzesItems = quizzes.map((quiz) => ({ quiz }));
	const [currentIndex, setCurrentIndex] = useState(0);
	const handleClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex < quizzesItems.length - 1 ? prevIndex + 1 : 0,
		);
	};

	return (
		<>
			<div className="question-container">
				{quiz && <h2 className="question">{quiz.question}</h2>}
				{!quiz && <div>Chargement du quiz...</div>}
			</div>
			<div className="options">
				<Options />
				<button type="button" className="next" onClick={handleClick}>
					Suivant
				</button>
			</div>
		</>
	);
}
