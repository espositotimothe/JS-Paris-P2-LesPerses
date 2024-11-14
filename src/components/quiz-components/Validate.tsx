interface ValidateProps {
	selectedAnswer: string | null;
	correctAnswer: string;
	onValidate: (isValid: boolean) => void;
}

const Validate: React.FC<ValidateProps> = ({
	selectedAnswer,
	correctAnswer,
	onValidate,
}) => {
	const handleValidation = () => {
		if (selectedAnswer !== null) {
			const isValid = selectedAnswer === correctAnswer;

			onValidate(isValid);
		} else {
			onValidate(false);
		}
	};

	return (
		<div className="validate">
			<button type="button" onClick={handleValidation}>
				Valider
			</button>
			{"·"}
		</div>
	);
};

export default Validate;
