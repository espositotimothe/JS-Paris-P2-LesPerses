import "./EndQuiz.css";
import Header from "./Header";

function EndQuiz(onRestart: () => void) {
	return (
		<section className="completion">
			<h2 className="completion-title">Quiz terminé !</h2>
			<span className="congrats"> Bravo !! </span>
			<img
				className="podium"
				src="src/images/podium-sans-fond.png"
				alt="podium"
			/>
			<button type="button" className="restart-button" onClick={onRestart}>
				recommence le quiz
			</button>
		</section>
	);
}

export default EndQuiz;
