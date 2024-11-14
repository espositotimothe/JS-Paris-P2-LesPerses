import { useEffect, useState } from "react";
import type { Dispatch } from "react";
// import NextButton from "./NextButton";
import Options from "./Options";

type Question = {
	_id: string;
	question: string;
	answer: string;
	badAnswers: string[];
	category: string;
	difficulty: "facile" | "normal" | "difficile";
};

function Questions({
	data,
	setData,
}: { data: Question[] | null; setData: Dispatch<Question[] | null> }) {
	const [quizzes, setQuizzes] = useState<Quiz[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [quiz, setQuiz] = useState<Quiz | null>(null);
	const currentQuestion = data ? data[currentIndex] : null;

	const handleQuestionsClick = () => {
		if (data) {
			setCurrentIndex((prevIndex) =>
				prevIndex < data.length - 1 ? prevIndex + 1 : 0,
			);
		}
	};

	useEffect(() => {
		setQuiz(quizzes[currentIndex]);
	}, [quizzes, currentIndex]);

	return (
		<>
			<div>
				{currentQuestion ? (
					<div key={currentQuestion._id}>
						<h2>{currentQuestion.question}</h2>
						<Options {...currentQuestion} />
					</div>
				) : (
					<p>Aucune question trouvée.</p>
				)}
			</div>
			<button type="button" className="next" onClick={handleQuestionsClick}>
				Suivant
			</button>
		</>
	);
}

export default Questions;
