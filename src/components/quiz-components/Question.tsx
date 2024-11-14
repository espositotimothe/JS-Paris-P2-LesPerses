import { useEffect, useState } from "react";
import NextButton from "./NextButton";
import Options from "./Options";

type Quiz = {
	_id: string;
	question: string;
	answer: string;
	badAnswers: string[];
	category: string;
	difficulty: "facile" | "normal" | "difficile";
};

export default function Question() {
	const [quizzes, setQuizzes] = useState<Quiz[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [quiz, setQuiz] = useState<Quiz | null>(null);

	useEffect(() => {
		fetch("https://quizzapi.jomoreschi.fr/api/v1/quiz")
			.then((response) => response.json())
			.then((data) => {
				if (Array.isArray(data.quizzes) && data.quizzes.length > 0) {
					setQuizzes(data.quizzes);
					setQuiz(data.quizzes[0]);
				} else {
					console.error("Aucun quiz trouvé");
				}
			})
			.catch((error) =>
				console.error("Erreur lors de la récupération du quiz :", error),
			);
	}, []);

	const handleQuestionsClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex < quizzes.length - 1 ? prevIndex + 1 : 0,
		);
	};

	useEffect(() => {
		setQuiz(quizzes[currentIndex]);
	}, [quizzes, currentIndex]);

	return (
		<>
			{quiz && (
				<div className="question-container">
					<h2 className="question">{quiz.question}</h2>
					<div className="options">
						<Options
							badAnswers={quiz.badAnswers}
							answer={quiz.answer}
							_id={quiz._id}
							question={quiz.question}
							category={quiz.category}
							difficulty={quiz.difficulty}
						/>
						{/* <button
							type="button"
							className="next"
							onClick={handleQuestionsClick}
						>
							Suivant
						</button> */}
						<NextButton handleQuestionsClick={handleQuestionsClick} />
					</div>
				</div>
			)}
			{!quiz && <div>Chargement du quiz...</div>}
		</>
	);
}
