import "./QuizMain.css";

function QuizMain() {
	return (
		<>
			<section className="quiz">
				<div className="progress-container">{/* <progress> </progress> */}</div>
				<div className="progress-info">
					<button type="button" className="question-number">
						Question 1/10
					</button>
					<img
						src="src/images/Logo-cinéma-sans-fond.png"
						alt="Logo-cinema"
						className="quiz-illustration"
					/>
					{/* <p>Points: </p> 
					<span>10/399</span> */}
					{/* <Timer />  */}
				</div>
			</section>
		</>
	);
}

export default QuizMain;
