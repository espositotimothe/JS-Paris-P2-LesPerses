import React, { useEffect, useState } from "react";

type Quiz = {
	_id: string;
	question: string;
	answer: string;
	badAnswers: string[];
	category: string;
	difficulty: "facile" | "normal" | "difficile";
};

const shuffleArray = (array: string[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

export default function Options() {
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

	const allAnswers = quiz
		? shuffleArray([quiz.answer, ...quiz.badAnswers])
		: [];

	return (
		<div className="options">
			{allAnswers.map((answer) => (
				<button key={answer} type="button" className="option">
					{answer}
				</button>
			))}
		</div>
	);
}
