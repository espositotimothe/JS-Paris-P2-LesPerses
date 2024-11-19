import { useState } from "react";
import CheckAnswer from "./CheckAnswer";

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

export default function Options({ answer, badAnswers }: Quiz) {
	const answers = shuffleArray([answer, ...badAnswers]);

	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [isValidated, setIsValidated] = useState(false);

	const handleAnswerClick = (selected: string) => {
		if (!isValidated) setSelectedAnswer(selected);
	};

	const handleValidate = (isValid: boolean) => {
		setIsValidated(true);
	};

	return (
		<div>
			<div className="options">
				{answers.length > 0 &&
					answers.map((option) => (
						<button
							key={option}
							type="button"
							onClick={() => handleAnswerClick(option)}
						>
							{option}
						</button>
					))}
				<CheckAnswer
					selectedAnswer={selectedAnswer}
					correctAnswer={answer}
					onValidate={handleValidate}
					isValidated={isValidated}
				/>
			</div>
			{isValidated && (
				<div className="validation-message">
					{selectedAnswer === answer ? "Bonne réponse !" : "Mauvaise réponse !"}
				</div>
			)}
		</div>
	);
}
