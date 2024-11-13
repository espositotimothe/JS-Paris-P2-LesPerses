import Timer from "./Timer";

function QuizMain() {
	return (
		<>
			<section className="quiz">
				<div className="progress-container">
					<progress> </progress>
				</div>
				<div className="progress-info">
					<span>Question : 1/10</span>
					<p>
						Points: <span>10/399</span>
					</p>
					<Timer />
				</div>
			</section>
		</>
	);
}

export default QuizMain;
