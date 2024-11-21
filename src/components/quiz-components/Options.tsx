import { useEffect, useState } from "react";
import CheckAnswer from "./CheckAnswer";
import "./option.css";

// Fonction pour mélanger les réponses de manière aléatoire
function shuffleArray(array: string[]): string[] {
	return array.sort(() => Math.random() - 0.5);
}

type Quiz = {
	_id: string;
	question: string;
	answer: string;
	badAnswers: string[];
	category: string;
	difficulty: "facile" | "normal" | "difficile";
};

export default function Options({ answer, badAnswers }: Quiz) {
	const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [isValidated, setIsValidated] = useState(false);

	// Mélanger les réponses une seule fois lors du chargement de la question
	useEffect(() => {
		const allAnswers = [answer, ...badAnswers]; // Combine la bonne réponse et les mauvaises
		setShuffledAnswers(shuffleArray(allAnswers)); // Mélanger les réponses
	}, [answer, badAnswers]); // S'exécute uniquement lorsque `answer` ou `badAnswers` changent

	const handleAnswerClick = (selected: string) => {
		if (!isValidated) {
			setSelectedAnswer(selected);
		}
	};

	const handleValidate = (isValid: boolean) => {
		setIsValidated(true);
	};

	return (
		<div>
			<div className="options">
				{shuffledAnswers.map((ans) => (
					<button
						type="button"
						key={ans}
						onClick={() => handleAnswerClick(ans)}
						className={`option ${selectedAnswer === ans ? "selected" : ""} ${
							isValidated && ans === answer ? "correct" : ""
						} ${
							isValidated && selectedAnswer === ans && selectedAnswer !== answer
								? "incorrect"
								: ""
						}`}
						disabled={isValidated}
					>
						{ans}
					</button>
				))}
			</div>
			<CheckAnswer
				selectedAnswer={selectedAnswer}
				correctAnswer={answer}
				onValidate={handleValidate}
				isValidated={isValidated}
			/>
		</div>
	);
}
