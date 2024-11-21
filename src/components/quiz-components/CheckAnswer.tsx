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
		<div>
			<button
				type="button"
				className="validate-button"
				onClick={handleValidation}
				disabled={isValidated}
			>
				Valider
			</button>
		</div>
	);
}
