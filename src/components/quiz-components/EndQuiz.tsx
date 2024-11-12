function EndQuiz() {

	return (
		<section className="completion">
			<h2>Quiz terminé !</h2>
			<span> Bravo </span>
			<p className="result">Ton score : <strong>20</strong> sur 399 et ton pourcentage de réussite est de (20)% </p>
			<p className="highscore">(HighScore: 300)</p>
			<button type="button">recommence le quiz</button>
		</section>
	);
}

export default EndQuiz;