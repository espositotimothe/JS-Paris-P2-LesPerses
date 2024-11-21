import type { Dispatch, SetStateAction } from "react";
import type { Question } from "../Themedif";
import "./NextButton.css";

type NextButtonProps = {
	data: Question[] | null;
	setCurrentIndex: Dispatch<SetStateAction<number>>;
};

function NextButton({ data, setCurrentIndex }: NextButtonProps) {
	const NextQuestion = () => {
		if (data) {
			setCurrentIndex((prevIndex) =>
				prevIndex < data.length - 1 ? prevIndex + 1 : 0,
			);
		}
	};
	return (
		<div className="button-next-container">
			<button type="button" className="button-next" onClick={NextQuestion}>
				Suivant
			</button>
		</div>
	);
}

export default NextButton;
