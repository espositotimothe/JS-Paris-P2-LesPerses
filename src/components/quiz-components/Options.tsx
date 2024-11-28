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

type OptionsProps = {
	answer: string;
	badAnswers: string[];
	selectedAnswer: string | null;
	setSelectedAnswer: React.Dispatch<React.SetStateAction<string | null>>;
	onValidate: (isValid: boolean) => void;
	isValidated: boolean;
};

export default function Options({
	answer,
	badAnswers,
	selectedAnswer,
	setSelectedAnswer,
	onValidate,
	isValidated,
}: OptionsProps) {
	const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

	useEffect(() => {
		const allAnswers = [answer, ...badAnswers]; // Combine la bonne réponse et les mauvaises
		setShuffledAnswers(shuffleArray(allAnswers)); // Mélanger les réponses
	}, [answer, badAnswers]);

	const handleAnswerClick = (selected: string) => {
		if (!isValidated) {
			setSelectedAnswer(selected); // Mettre à jour la réponse sélectionnée
		}
	};

	const handleValidate = () => {
		if (selectedAnswer) {
			const isValid = selectedAnswer === answer; // Vérifier si la réponse est correcte
			onValidate(isValid); // Passer l'état à parent via onValidate
		}
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
						disabled={isValidated} // Désactiver les réponses après validation
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
