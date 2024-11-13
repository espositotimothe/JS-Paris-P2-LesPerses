import QuizMain from "./QuizMain";

function Header() {
	return (
		<>
			<section className="welcome">
				<h1>Quiz</h1>
				<p>Total questions : 10</p>
				<button type="button">Lance le quiz</button>
				<QuizMain />
			</section>
		</>
	);
}

export default Header;
