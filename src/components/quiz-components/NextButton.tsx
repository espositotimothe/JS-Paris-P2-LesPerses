import type { Dispatch, SetStateAction } from "react";
import type { Question } from "../Themedif";

type NextButtonProps = {
	data: Question[] | null;
	setCurrentIndex: Dispatch<SetStateAction<number>>;
};

function NextButton({ data, setCurrentIndex }: NextButtonProps) {
	const handleQuestionsClick = () => {
		if (data) {
			setCurrentIndex((prevIndex) =>
				prevIndex < data.length - 1 ? prevIndex + 1 : 0,
			);
		}
	};
	return (
		<button type="button" className="next" onClick={handleQuestionsClick}>
			Suivant
		</button>
	);
}

export default NextButton;
