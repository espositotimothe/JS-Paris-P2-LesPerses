import "./CheckAnswer.css";

interface ValidateProps {
	selectedAnswer: string | null;
	correctAnswer: string;
	onValidate: (isValid: boolean) => void;
	isValidated: boolean;
}

export default function CheckAnswer({
	selectedAnswer,
	correctAnswer,
	onValidate,
	isValidated,
}: ValidateProps) {
	const handleValidation = () => {
		if (!isValidated && selectedAnswer !== null) {
			onValidate(selectedAnswer === correctAnswer);
		}
	};

	return (
		<div className="validate-button">
			<button
				type="button"
				className="validate-button-next"
				onClick={handleValidation}
				disabled={isValidated} // Le bouton est désactivé après la validation
			>
				Valider
			</button>
		</div>
	);
}
