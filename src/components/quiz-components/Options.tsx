import { useState } from "react";

type Quiz = {
	_id: string;
	question: string;
	answer: string;
	badAnswers: string[];
	category: string;
	difficulty: "facile" | "normal" | "difficile";
};

const shuffleArray = (array: string[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

//badAnswers = API badAnswers
// answer= la bonne réponse
export default function Options({
	_id,
	question,
	answer,
	badAnswers,
	category,
	difficulty,
}: Quiz) {
	// const [quiz, setQuiz] = useState<Quiz | null>(null);
	// console.log(badAnswers)

	// badAnswers.unshift(answer);
	// const answers = shuffleArray(badAnswers);
	const answers = shuffleArray([answer, ...badAnswers]);
	// console.log(answers)
	//const [allAnswers, setAllAnswers] = useState<string[]>(answers);
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

	const handleAnswerClick = (answer: string) => {
		setSelectedAnswer(answer);
	};

	return (
		<div className="options">
			{answers.length > 0 &&
				answers.map((answer) => (
					<button
						key={answer}
						type="button"
						className={`option ${selectedAnswer === answer ? "selected" : ""}`}
						onClick={() => handleAnswerClick(answer)}
					>
						{answer}
					</button>
				))}
		</div>
	);
}
