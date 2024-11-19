import { useState } from "react";
import type { Dispatch } from "react";
import NextButton from "./NextButton";
import Options from "./Options";

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
			<NextButton data={data} setCurrentIndex={setCurrentIndex} />
		</>
	);
}

export default Questions;
