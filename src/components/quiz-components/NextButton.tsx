type NextButtonProps = {
	onClickNext: () => void;
};

function NextButton({ onClickNext }: NextButtonProps) {
	return (
		<div className="navigation-buttons">
			<button type="button" className="next" onClick={onClickNext}>
				Suivant
			</button>
			{/* <button className="finish">Fin</button> */}
		</div>
	);
}

export default NextButton;
