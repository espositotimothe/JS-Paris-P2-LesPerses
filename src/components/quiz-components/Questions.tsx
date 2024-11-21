import { useState } from "react";
import type { Dispatch } from "react";
import NextButton from "./NextButton";
import Options from "./Options";
import "./Questions.css";
import QuizMain from "./QuizMain";

type Question = {
	_id: string;
	question: string;
	answer: string;
	badAnswers: string[];
	category: string;
	difficulty: "facile" | "normal" | "difficile";
	quiz: string;
};

function Questions({
	data,
}: { data: Question[] | null; setData: Dispatch<Question[] | null> }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentQuestion = data ? data[currentIndex] : null;

	return (
		<>
			<QuizMain />
			<div className="question-container">
				{currentQuestion ? (
					<div key={currentQuestion._id}>
						<h2 className="question">{currentQuestion.question}</h2>
						<Options {...currentQuestion} />
					</div>
				) : (
					<p className="question-error">Aucune question trouvée.</p>
				)}
			</div>
			<NextButton data={data} setCurrentIndex={setCurrentIndex} />
		</>
	);
}

export default Questions;
