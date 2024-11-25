import { useState } from "react";
import type { Dispatch } from "react";
import NextButton from "./NextButton";
import Options from "./Options";
import "./Questions.css";
import EndQuiz from "./EndQuiz";
import QuizMain from "./QuizMain";

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
}: { data: Question[]; setData: Dispatch<Question[]> }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentQuestion = data ? data[currentIndex] : null;
	// const isQuizFinished = currentIndex >= data.length - 1;
	const isQuizFinished = currentIndex > 3;

	const restartQuiz = () => {
		setCurrentIndex(0);
	};

	return (
		<>
			<div className="question-container">
				{isQuizFinished ? (
					<div className="end-quiz">
						<EndQuiz onRestart={restartQuiz} />
					</div>
				) : currentQuestion ? (
					<>
						<QuizMain />
						<div key={currentQuestion._id}>
							<h2 className="question">{currentQuestion.question}</h2>
							<Options {...currentQuestion} />
						</div>
					</>
				) : (
					<p className="question-error">Aucune question trouvée.</p>
				)}
			</div>
			{!isQuizFinished && (
				<NextButton data={data} setCurrentIndex={setCurrentIndex} />
			)}
		</>
	);
}

export default Questions;
