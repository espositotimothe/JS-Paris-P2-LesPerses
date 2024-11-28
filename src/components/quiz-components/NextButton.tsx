import "./NextButton.css";

type NextButtonProps = {
	isValidated: boolean;
	onClick: () => void;
};

function NextButton({ isValidated, onClick }: NextButtonProps) {
	return (
		<div className="button-next-container">
			<button
				type="button"
				className={`button-next ${isValidated ? "active" : "disabled"}`}
				onClick={onClick}
				disabled={!isValidated} // Désactiver le bouton tant que la question n'est pas validée
			>
				Suivant
			</button>
		</div>
	);
}

export default NextButton;
