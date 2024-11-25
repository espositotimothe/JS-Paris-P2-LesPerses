import { useState } from "react";
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
}: {
	data: Question[] | null;
}) {
	const [currentIndex, setCurrentIndex] = useState(0); // Index de la question actuelle
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null); // Réponse sélectionnée
	const [isValidated, setIsValidated] = useState(false); // Validation de la réponse

	const currentQuestion = data ? data[currentIndex] : null;

	// Fonction de validation de la réponse
	const handleValidation = (isValid: boolean) => {
		setIsValidated(true);
	};

	// Fonction pour passer à la question suivante
	const handleNextQuestion = () => {
		if (data) {
			setCurrentIndex((prevIndex) =>
				prevIndex < data.length - 1 ? prevIndex + 1 : 0,
			);
			setSelectedAnswer(null); // Réinitialiser la sélection
			setIsValidated(false); // Réinitialiser l'état de validation
		}
	};

	return (
		<>
			<QuizMain />
			<div className="question-container">
				{currentQuestion ? (
					<div key={currentQuestion._id}>
						<h2 className="question">{currentQuestion.question}</h2>
						<Options
							{...currentQuestion}
							selectedAnswer={selectedAnswer}
							setSelectedAnswer={setSelectedAnswer}
							onValidate={handleValidation}
							isValidated={isValidated}
						/>
					</div>
				) : (
					<p className="question-error">Aucune question trouvée.</p>
				)}

				<NextButton
					isValidated={isValidated} // Le bouton Suivant est activé uniquement si la question a été validée
					onClick={handleNextQuestion} // Fonction pour passer à la question suivante
				/>
			</div>
		</>
	);
}

export default Questions;
