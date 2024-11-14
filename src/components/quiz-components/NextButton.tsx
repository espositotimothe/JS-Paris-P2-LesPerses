type NextButtonProps = {
	handleQuestionsClick: () => void;
};

function NextButton({ handleQuestionsClick }: NextButtonProps) {
	return (
		<button type="button" className="next" onClick={handleQuestionsClick}>
			Suivant
		</button>
	);
}

export default NextButton;
